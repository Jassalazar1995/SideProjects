import { Link } from "react-router-dom";
import PomodoroClock from "./PomodoroClock";
import { useState } from 'react';

export default function Nav() {
  // Function to handle logout


  // State to control the dropdown display


  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-40">
      <div className="flex gap-4">
        <Link to='/' className="hover:text-gray-300">
          <div>Home</div>
        </Link>
        </div>
    </nav>
  );
}
