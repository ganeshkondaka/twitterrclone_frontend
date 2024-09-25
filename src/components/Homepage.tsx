import axios from "axios"
import { useEffect, useState } from "react"
import Posttweet_form from "./Posttweet_form"

interface tweettype {
    id: number,
    username: string,
    tweet: string
}

export default function Homepage() {
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
            const response = await axios.get("http://localhost:3000/api/prod/alltweets", { headers });
            // const response = await axios.get("http://localhost:3000/api/prod/alltweets");
            settweets(response.data.data)


        } catch (error) {
            console.error('Error fetching chat data:', error);
        }
    }

    useEffect(() => {
        fetchdata()
    }, [])

    const addNewTweet = (newtweet: tweettype) => {
        settweets((prevTweets) => [...prevTweets, newtweet]);
    };

    return (
        <div className="flex justify-center align-center">
            <div className="w-60">side menu</div>
            <div>
                <span>navbar</span>
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
                {/* <Posttweet_form addNewTweet={addNewTweet}></Posttweet_form> */}
                <span className="w-60">user opeartor</span></div>
            <div>trending</div>
        </div>
    )
}
