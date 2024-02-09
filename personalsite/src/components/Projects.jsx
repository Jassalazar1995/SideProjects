import Slideshow from './Slideshow'; 


function Projects() {
    
    const projects = [
        {
          id: 1,
          title: "Project One",
          description: "This is a brief description of Project One.",
          images: ["path/to/image1.jpg", "path/to/image2.jpg"], 
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
  
    return (
      <div className="max-w-6xl mx-auto mt-10">
        <h1 className="text-3xl font-bold text-center">My Projects</h1>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
  <div key={project.id} className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
    <a href={project.demoUrl} className="w-full block h-full">
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
    </a>
  </div>
))}
        </div>
      </div>
    );
  }
  
  export default Projects;
  