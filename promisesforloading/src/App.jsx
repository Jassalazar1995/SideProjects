import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import orderPromise from './Pages/Promises'

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
    <div>
      <h1>Order Status:</h1>
      <p>{message}</p>
    </div>
  )
}

export default App
