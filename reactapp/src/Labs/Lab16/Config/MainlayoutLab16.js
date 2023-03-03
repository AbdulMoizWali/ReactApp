import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveDrawer from "../Component/ResponsiveDrawer";

export default function MainlayoutLab16() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="Dashboard/*" element={<ResponsiveDrawer />} />
            </Routes>
        </BrowserRouter>
    </>

}