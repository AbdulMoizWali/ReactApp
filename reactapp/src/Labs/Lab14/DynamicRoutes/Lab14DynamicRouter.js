import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Posts from "./Posts";
import SinglePost from "./SinglePost";

export default function Lab14DynamicRouter() {
    return <>
        <BrowserRouter>
            {/* <nav>
                <Link to="/">Home Page</Link>
                <Link to="/about">About</Link>
            </nav> */}
            <Routes>
                <Route path="Posts" element={<Posts />} />
                <Route path="SinglePost/:id" element={<SinglePost />} />
            </Routes>
        </BrowserRouter>
    </>

}