import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Projects from "./Projects";
import Welcome from "./Welcome";

function Home() {
    return (
      <div 
      id ="home"
      className="w-full h-screen bg-black text-white min-h-screen"
      >
        <Welcome />
        <About />
        <Projects />
        <Contact />

      </div>
    );
  }
  
  export default Home;