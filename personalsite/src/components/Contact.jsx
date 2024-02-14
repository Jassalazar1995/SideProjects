function Contact() {
    return (
      <div 
      id ="contact"
      className="w-full h-screen bg-black text-white min-h-screen"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
      <div className="max-w-lg mx-auto mt-10">
        <h1 className="text-3xl font-bold text-center">Contact</h1>
        <p className="mt-5 text-lg text-white-700 text-center">
          I'd love to hear from you! Whether you have a project in mind or just want to say hi,
          feel free to drop me a message.
        </p>
        <div className="mt-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white-700 text-sm font-bold mb-2">Name:</label>
            <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white-700 text-sm font-bold mb-2">Email:</label>
            <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-white-700 text-sm font-bold mb-2">Message:</label>
            <textarea id="message" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Send
          </button>
        </div>
      </div>
      </div>
      </div>

    );
  }
  
  export default Contact;