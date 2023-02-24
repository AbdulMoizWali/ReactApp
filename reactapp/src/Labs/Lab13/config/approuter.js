import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "../Screens/about";
import Home from "../Screens/home";

export default function AppRouter() {
    return <>
        <BrowserRouter>
            <nav>
                <Link to="/home">Home Page</Link>
                <Link to="/about">About</Link>
            </nav>
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
        </BrowserRouter>
    </>

}