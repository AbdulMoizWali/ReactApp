import { useEffect, useState } from "react";
import { Get } from "./apibasemethod";
import SMGrid from "./SMGrid";

export default function Comments() {
    const [commentsData, setCommentsData] = useState(false);
    const [loader, setLoader] = useState(true);


    let getComments = () => {
        Get('comments').then((res) => {
            setCommentsData([...res.data]);
            setLoader(false);
            console.log(res)
        }).catch((err) => {
            setLoader(false);
            console.log(err)
        })
    }

    useEffect(() => {
        getComments();
    }, [])

    let columns = [
        {
            displayName: 'Email',
            key: 'email',
            displayField: (e) => <a href={`mailto:${e.email}`}>{e.email}</a>
        },
        {
            displayName: 'Name',
            key: 'name'
        }
    ];

    return <SMGrid title="Comments data" columns={columns} datasource={commentsData} isLoading={loader} />

    //let get
}