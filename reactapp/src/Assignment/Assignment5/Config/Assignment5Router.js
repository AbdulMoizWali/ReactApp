import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Screen1 from "../Screens/screen1";
import Screen2 from "../Screens/screen2";
import Screen3 from "../Screens/screen3";
import Screen4 from "../Screens/screen4";
import Screen5 from "../Screens/screen5";

export default function Assignment5Router() {
    return <>
        <BrowserRouter>
            <nav>
                <Link to="/screen1">Screen 1</Link>
                <Link to="/screen2">Screen 2</Link>
                <Link to="/screen3">Screen 3</Link>
                <Link to="/screen4">Screen 4</Link>
                <Link to="/screen5">Screen 5</Link>
            </nav>
            <Routes>
                <Route path="screen1" element={<Screen1 />} />
                <Route path="screen2" element={<Screen2 />} />
                <Route path="screen3" element={<Screen3 />} />
                <Route path="screen4" element={<Screen4 />} />
                <Route path="screen5" element={<Screen5 />} />
            </Routes>
        </BrowserRouter>
    </>

}