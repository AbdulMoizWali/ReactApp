import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export default function Posts() {
    const params = useParams();
    const navigate = useNavigate();

    let api = `https://jsonplaceholder.typicode.com/photos`;
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

    let moveToSinglePostWithID = (id) => {
        navigate(`/SinglePost/${id}`);
    }

    return (
        <>
            <h1>Single Post</h1>
            <div>
                {
                    data.map((val, i) => {
                        return <div key={i} onClick={() => moveToSinglePostWithID(val.id)} >
                            <h2>{val.title}</h2>
                            <img src={val.thumbnailUrl} alt={val.title} width="200px" />
                        </div>
                    })
                }
            </div>
        </>
    )
}