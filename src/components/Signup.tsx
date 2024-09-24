import axios from "axios";
import { useState } from "react";

export default function Signup() {
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (!email || !password) {
                return console.log(" insifficient data")
            }
            const response = await axios.post("http://localhost:3000/api/auth/signup", { username, email, password })
            console.log(response)
        } catch (error) {
            console.log("internal server error", error)
        }
    }

    return (
        <div>
            <div>
                <img src="../src/assets/xlogo.svg" alt="x logo" />
            </div>


            <div>
                <form onClick={handlesubmit}>
                    <input
                        type="username"
                        placeholder='Enter username'
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        required />
                    <input
                        type="email"
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        required />
                    <input
                        type="password"
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required />
                    <label htmlFor="">Date of birth</label>
                    <label htmlFor="">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</label>
                    {/* <input type="text" placeholder="Date of birth" /> */}
                    <button type="submit">Register</button>

                </form>
            </div>
            <div></div>
        </div>
    )
}
