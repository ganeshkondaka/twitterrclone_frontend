import axios from "axios"
import { useEffect, useState } from "react"

export default  function Homepage() {
    const [loggedin_user, setloggedin_user] = useState("")


    const fetchdata = async () => {
        try {
            const token = localStorage.getItem("token")
            if (!token) {
                throw new Error("token not found");
            }
            const headers = {
                Authorization: token, 
            };
            // const response = await axios.get("http://localhost:3000/api/prod/alltweets",{headers});
            const response = await axios.get("http://localhost:3000/api/prod/alltweets");
            console.log(response.data.data)
            

        } catch (error) {
            console.error('Error fetching chat data:', error);
        }
    }
    useEffect(()=>{
        fetchdata()
    })
    return (
        <div>

        </div>
    )
}
