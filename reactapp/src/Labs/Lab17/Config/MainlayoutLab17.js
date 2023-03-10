import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveDrawer from "../Component/ResponsiveDrawer";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";

export default function MainlayoutLab17() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="Dashboard/*" element={<ResponsiveDrawer />} />
            </Routes>
        </BrowserRouter>
    </>

}