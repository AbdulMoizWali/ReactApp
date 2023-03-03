import { useEffect, useState } from "react";
import { Get } from "./apibasemethod";
import SMGrid from "./SMGrid";

export default function About() {
    const [userList, setUserList] = useState([]);
    const [loader, setLoader] = useState(true);

    let getUsers = () => {
        Get('users').then(
            (res) => {
                setUserList([...res.data]);
                setLoader(false);
                console.log(res)
            })
            .catch((err) => {
                setLoader(false);
                console.log(err)
            });
    }

    useEffect(() => {
        getUsers();
    }, [])


    let Cols = [
        {
            key: 'username',
            displayName: 'User Name',
        }
        ,
        {
            key: 'email',
            displayName: 'Email'
        }
        ,
        {
            key: 'phone',
            displayName: 'Contact#'
        }
        ,
        {
            key: 'website',
            displayName: 'Website Url'
        }
    ]


    return (
        <>
            <h1>
                About
            </h1>
            <SMGrid isLoading={loader} title='User Data' columns={Cols} datasource={userList} />
        </>
    )
}