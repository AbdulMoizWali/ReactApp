import axios from "axios"
import { useState } from "react";

export default function Lab13() {
    //let api = "https://jsonplaceholder.typicode.com/todos"; //todo is end point
    let api = "https://jsonplaceholder.typicode.com/posts";

    const [data, setData] = useState([]);
    let getAPIData = () => {
        axios.get(api).then((res) => {
            console.log(res);
            setData([...res.data]);
        }).catch((err) => {
            console.log(err);
        });

        axios.post(api, {
            body: 'Custom Body',
            title: 'ABH',
            userId: 1
        }).then((res) => {
            console.log("Send Succesfully", res);
        }).catch((err) => {
            console.log("Send failed", err);
        });

        axios.put(api + "/1", {
            body: 'Custom Body of 1',
            title: 'ABH of 1',
            userId: 1
        }).then((res) => {
            console.log("updated Succesfully", res);
        }).catch((err) => {
            console.log("updated failed", err);
        });

        axios.delete(api + "/2").then((res) => {
            console.log("deleted Succesfully", res);
        }).catch((err) => {
            console.log("deleted failed", err);
        });;
    }

    return (
        <>
            <button onClick={() => getAPIData()}>Get data</button>
            {
                data.map((val, i) => {
                    return <div key={i}>{val.title}</div>
                })
            }
        </>
    )
}