import { BrowserRouter, Route, Routes } from "react-router-dom";
import Course from "../Screens/Course";
import CourseForm from "../Screens/CourseForm";
import RegistrationControl from "../Screens/RegistrationControl";
import Result from "../Screens/Result";
import Student from "../Screens/Student";
import ResponsiveDrawer from "./ResponsiveDrawer";

export default function Mainlayout() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="Dashboard/*" element={<ResponsiveDrawer />} />
            </Routes>
        </BrowserRouter>
    </>

}