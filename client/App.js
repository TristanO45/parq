import React from "react";
//import { render } from "react-dom";
import { BrowserRouter, Routes, Route ,Link } from "react-router-dom";



export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}/>
                    <Route index element={ <Home /> } />
                    <Route path="about" element={ <About /> }/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};