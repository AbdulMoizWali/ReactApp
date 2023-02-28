import axios from "axios"
import { useState } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import Post from "./Post";

export default function Lab14() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/post" element={<Post />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}