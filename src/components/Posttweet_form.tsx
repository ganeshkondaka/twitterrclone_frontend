import axios from "axios";
import { useState } from "react"

// Define the structure of the tweet object
interface Tweet {
  id: number;
  username: string;
  tweet: string;
}

interface PostTweetFormProps {
  addNewTweet: (newTweet: Tweet) => void;
}

export default function Posttweet_form({ addNewTweet }:PostTweetFormProps) {
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
      const response = await axios.post("http://localhost:3000/api/prod/posttweet", { username, tweet }, { headers })
      console.log(response)
      const newtweet = response.data.data
      addNewTweet(newtweet)
      settweet("")
    } catch (error) {
      console.error('Error sending chat data:', error);

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
