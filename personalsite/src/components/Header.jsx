import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <Link to="/" className="px-2">Home</Link>
        <Link to="/projects" className="px-2">Projects</Link>
        <Link to="/about" className="px-2">About</Link>
        <Link to="/contact" className="px-2">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;