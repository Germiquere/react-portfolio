import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header/Header";
import { PreLoader } from "./components/PreLoader";
import { Hero } from "./sections/Hero";
import Loader from "./components/Loader";

const Works = React.lazy(() => import("./sections/Works"));
const About = React.lazy(() => import("./sections/About"));
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <BrowserRouter>
      {isLoading ? (
        <Loader />
      ) : (
        <main className="relative mt-[64px]">
          <Header />
          <Hero />

          <Suspense fallback={<PreLoader />}>
            <Works />
            <About />
          </Suspense>
        </main>
      )}
    </BrowserRouter>
  );
}

export default App;
