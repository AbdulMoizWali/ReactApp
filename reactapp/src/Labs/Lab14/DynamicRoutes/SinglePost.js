import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export default function SinglePost() {
    const params = useParams();
    const navigate = useNavigate();

    let api = `https://jsonplaceholder.typicode.com/photos/${params.id}`;
    //    const [data, setData] = useState([]);
    const [postobject, setPostObject] = useState({});

    let getAPIData = () => {
        axios.get(api).then((res) => {
            console.log(res);
            setPostObject(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        getAPIData()
    }, [])

    return (
        <>
            <h1>Single Post</h1>

            <h1>{postobject.id + ") " + postobject.title}</h1>
            <img src={postobject.thumbnailUrl} alt={postobject.title} />
        </>
    )
}