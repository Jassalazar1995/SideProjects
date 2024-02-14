import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (window.location.pathname === '/') {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { replace: true });
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <Link to="/" className="px-2">Home</Link>
        <a href="#welcome" onClick={() => scrollToSection('welcome')} className="px-2 cursor-pointer">Welcome</a>
        <a href="#about" onClick={() => scrollToSection('about')} className="px-2 cursor-pointer">About</a>
        <a href="#projects" onClick={() => scrollToSection('projects')} className="px-2 cursor-pointer">Projects</a>
        <a href="#contact" onClick={() => scrollToSection('contact')} className="px-2 cursor-pointer">Contact</a>
        <Link to="/Extra" className="px-2">Hobbies</Link>
      </nav>
    </header>
  );
}

export default Header;
