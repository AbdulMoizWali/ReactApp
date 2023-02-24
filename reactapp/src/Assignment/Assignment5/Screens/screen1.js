import axios from "axios";
import { useEffect, useState } from "react";

export default function Screen1() {
    //let api = "https://jsonplaceholder.typicode.com/todos"; //todo is end point
    useEffect(()=>{
        getAPIData();
    }, []);
    let api = "https://jsonplaceholder.typicode.com/posts";

    const [data, setData] = useState([]);
    
   
    let getAPIData = () => {
        axios.get(api).then((res) => {
            console.log(res);
            setData([...res.data]);
        }).catch((err) => {
            console.log(err);
        });
    }

    
    return (
        <>
            <h1>Screen 1</h1>
            {
                data.map((val, i) => {
                    return <div key={i}>{val.title}</div>
                })
            }
        </>
    )
}