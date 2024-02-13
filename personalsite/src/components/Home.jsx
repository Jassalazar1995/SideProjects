import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Projects from "./Projects";
function Home() {
    return (
      <div 
      id ="home"
      className="w-full h-screen bg-black text-white min-h-screen"
      >
      <div className="max-w-auto mx-auto">
        <h1 className="text-4xl font-bold text-center">Welcome to My Portfolio</h1>
        <p className="mt-5 text-lg text-gray-700 text-center">
          Dive into my projects and explore my skills in software development. Let's build something amazing together.
        </p>
        <About />
        <Projects />
        <Contact />
      </div>
      </div>
    );
  }
  
  export default Home;