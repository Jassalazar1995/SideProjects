import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <Link to="/" className="px-2">Home</Link>
        <Link to="/Extra" className="px-2">Hobbies</Link>
      </nav>
    </header>
  );
}

export default Header;