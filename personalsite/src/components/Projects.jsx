import Slideshow from './Slideshow'; 
import { useNavigate } from "react-router-dom";


function Projects() {
  const navigate = useNavigate();
    const projects = [
        {
          id: 1,
          title: "Project One",
          description: "This is a project I have been wanting to make a reality for about 10 years. Since I first discovered my love for math when I was 17, I realized it was my future. A year or two later I realized I wanted to create a platform to allow people like me to be able to easily access math in a way that didn't feel pretenious or intimidating. This is what I want to make this website to be. This website is years of passion and vision culminating into a tangible object. It truly brings joy to my heart. ",
          images: ["images/journal/JournalHomePage.png", "images/journal/LoginPage.png"], 
          technologies: ["React", "Tailwind CSS", "Node.js"],
          demoUrl: "#",
          codeUrl: "#",
        },
        {
          id: 2,
          title: "Project Two",
          description: "This is a brief description of Project Two.",
          images: ["path/to/image1.jpg", "path/to/image2.jpg"], 
          technologies: ["Vue", "Vuetify", "Firebase"],
          demoUrl: "#",
          codeUrl: "#",
        },
      ];
  
  // Function to handle project click
  const handleProjectClick = (demoUrl) => {
    navigate(demoUrl); // Navigate to the demo URL
  };


  return (
    <div 
    id ="projects"
    className="h-screen bg-black text-white min-h-screen"
    >
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center">My Projects</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto"
               onClick={() => handleProjectClick(project.demoUrl)}> {/* Add onClick event handler */}
            <Slideshow images={project.images} />
            <div className="bg-white dark:bg-gray-800 w-full p-4">
              <p className="text-indigo-500 text-md font-medium">
                {project.title}
              </p>
              <p className="text-gray-800 dark:text-white text-sm mt-2">
                {project.description}
              </p>
              <div className="flex items-center mt-4">
                <div className="flex gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs font-semibold px-2 py-1 bg-gray-200 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <a href={project.codeUrl} className="text-blue-500 text-sm font-medium hover:underline">View Code</a>
                <a href={project.demoUrl} className="text-blue-500 text-sm font-medium hover:underline">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
  
  export default Projects;
  