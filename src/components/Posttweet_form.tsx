import axios from "axios";
import { useState } from "react"

export default function Posttweet_form() {
  const [username, setusername] = useState(localStorage.getItem("loggedInUser"))
  const [tweet, settweet] = useState("");

  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!username || !tweet) {
        return console.log(" insifficient data")
      }
      const token = localStorage.getItem("token")
      if (!token) {
          throw new Error("token not found");
      }
      const headers = {
          Authorization: token,
      };
      const response = await axios.post("http://localhost:3000/api/prod/posttweet", { username, tweet },{headers})
      console.log(response)
      settweet("")
    } catch {

    }
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div>{username}</div>
        <input
              type="text"
              placeholder='type ur message'
              className='massageinput'
              value={tweet}
              onChange={(e) => settweet(e.target.value)}
              required
            />
        <button type="submit">Post</button>
      </form>
    </div>
  )
}
