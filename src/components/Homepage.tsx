import axios from "axios"
import { useEffect, useState } from "react"

interface tweettype {
    id: number,
    username: string,
    tweet: string
}

export default function Homepage() {
    const [loggedin_user, setloggedin_user] = useState("")
    const [tweets, settweets] = useState<tweettype[]>([])


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
            settweets(response.data.data)
            console.log(tweets)

        } catch (error) {
            console.error('Error fetching chat data:', error);
        }
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <div>
            <span></span>
            <span>
                <div></div>
                <div></div>
                {tweets.map((atweet) => (
                    <div key={atweet.id} className="p-4 border-b border-gray-300">
                        <div className="font-bold">{atweet.username}</div>
                        <div>{atweet.tweet}</div>
                    </div>
                ))}

            </span>

        </div>
    )
}
