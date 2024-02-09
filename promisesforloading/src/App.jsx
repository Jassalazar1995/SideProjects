import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import orderPromise from './Pages/Promises'
import './output.css'
import { Link } from 'react-router-dom'

function App() {
  // Setting the state
  const [message, setMessage] = useState('')
  

  

  // Function to render a message to the webpage
  function renderMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    document.body.appendChild(messageElement);
  }
  
  // Call processOrder to execute
  useEffect(() => {
    orderPromise.then((message) => {
      setMessage(message);
    }).catch((error) => {
      setMessage(error);
    });
  },[])
  
 // Trying to understand different tailwind syntax
  return (
    <div>
        <nav className="bg-gray-800 text-white p-24 flex justify-between items-center fixed top-10 left-10 right-0 z-50">
      <div className="flex gap-4">
        <Link to='/home' className="hover:text-gray-300">
          <div>Home</div>
        </Link>
        </div>
    </nav>
    <div className = "flex justify-center items-center h-screen bg-gradient-to-t from-indigo-400 to-blue-300">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-center text-2xl font-bold">Order Status:</h1>
        <p className="text-center mt-4">{message}</p>
      </div>
    </div>
    </div>
  )
}

export default App
