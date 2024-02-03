import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import orderPromise from './Pages/Promises'
import './output.css'
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
  

  return (
    <div className = "flex justify-center items-center h-screen bg-gradient-to-t from-indigo-500 to-blue-500">
<div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      <h1 className="text-center text-2xl font-bold">Order Status:</h1>
      <p className="text-center mt-4">{message}</p>
    </div>
    </div>
  )
}

export default App
