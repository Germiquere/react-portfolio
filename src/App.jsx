import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header/Header";
import { PreLoader } from "./components/PreLoader";
import { Hero } from "./sections/Hero";
import Loader from "./components/Loader";

const Works = React.lazy(() => import("./sections/Works"));
const About = React.lazy(() => import("./sections/About"));
function App() {
    return (
        <BrowserRouter>
            <main className="relative mt-[64px]">
                <Header />
                <Hero />
                <Works />
                <About />
            </main>
        </BrowserRouter>
    );
}

export default App;
