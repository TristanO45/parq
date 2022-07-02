import React from "react";
import { BrowserRouter, Routes, Route ,Link } from "react-router-dom";
import Home from "./components/Home";



export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}/>
                    <Route index element={ <Home /> } />
                    <Route path="about" element={ <About /> }/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/book">Book</Link>
                    </li>
                    <li>
                        <Link to="/host">Host</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}