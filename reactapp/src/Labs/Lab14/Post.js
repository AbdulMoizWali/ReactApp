import axios from "axios";
import { useEffect, useState } from "react"

export default function Post() {

    let api = "https://jsonplaceholder.typicode.com/photos";
    const [data, setData] = useState([]);

    let getAPIData = () => {
        axios.get(api).then((res) => {
            console.log(res);
            setData([...res.data]);
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        getAPIData()
    }, [])

    return (
        <>
            <h1>Post</h1>
            <div>
                {
                    data.map((val, i) => {
                        return <div key={i}>
                            <h2>{val.title}</h2>
                            <img src={val.thumbnailUrl} alt={val.title} width="200px" />
                        </div>
                    })
                }
            </div>
        </>
    )
}