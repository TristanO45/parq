import React from "react";
import { useState } from "react";
import AboutPop from  "./AboutPop.jsx";
import SignupPop from "./SignupPop.jsx";
import SignupForm from "./SignupForm.jsx";


export default function Home () {
    return (
        <main>
            <div>
                <h1>This is the landing page</h1>
                <AboutPop />
            </div>
            <div>
                <h1>This is the signin box</h1>
                <SignupPop />
            </div>
        </main>
    );
};