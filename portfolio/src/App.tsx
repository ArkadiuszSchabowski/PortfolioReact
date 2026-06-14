import { ToastContainer } from "react-toastify";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <ToastContainer />
      <div className="flex flex-col bg-gray-400 text-white overflow-x-hidden">
        <Navbar />
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
