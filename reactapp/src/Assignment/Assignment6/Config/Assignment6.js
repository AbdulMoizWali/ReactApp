import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveDrawer from "../Component/ResponsiveDrawer";

export default function Assignment6() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<ResponsiveDrawer />} />
            </Routes>
        </BrowserRouter>
    </>

}