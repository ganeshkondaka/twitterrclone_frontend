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
        <div>
            <div>
                <img src="../src/assets/xlogo.svg" alt="x logo" />
            </div>

            {/* <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                </div>
                <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" />
            </div> */}

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
                    {/* <span>
                        <select name="" id="">

                        </select>
                    </span> */}
                </form>
            </div>
            <div></div>
        </div>
    )
}
