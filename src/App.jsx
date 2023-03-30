import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Works, Navbar, Hero } from "./components";
import AnimatedText from "./components/AnimatedText";
import Loader from "./components/Loader";
BrowserRouter;
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="text-secondary">
      <BrowserRouter>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="relative z-0 bg-primary">
            <div className="bg-tertiary h-screen mx-auto justify-between w-full">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Works />
            <Contact />
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
