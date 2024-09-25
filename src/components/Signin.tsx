import { useState } from "react";
import axios from "axios";

export default function Signin() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handlesubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (!email || !password) {
                return console.log(" insifficient data")
            }
            const response = await axios.post("http://localhost:3000/api/auth/login",{email,password})
            console.log(response)
            const{success,jwttoken,name,error,msg}=response.data;
            if (success) {
                localStorage.setItem('token', jwttoken);
                localStorage.setItem('loggedInUser', name);
                console.log("token is ;",jwttoken,"name is :",name)

            } else if (error) {
                console.log(error);
            } else {
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex justify-center align-center">
            <div >
                <img src=".../src/assets/xlogo.svg" alt="x logo" />
            </div>

            <div>
                <form onSubmit={handlesubmit}>

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
                    <input type="text" placeholder="Date of birth" />
                    <button type="submit" >sign in</button>
                    
                </form>
            </div>
            <div></div>
        </div>
    )
}
