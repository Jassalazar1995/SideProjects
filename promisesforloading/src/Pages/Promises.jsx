const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  // Corrected executor function
  const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
      resolve('Sunglasses order processed.');
    } else {
      reject('That item is sold out.');
    }
  };
  
  // Creating the promise with the corrected executor function
  const myFirstPromise = new Promise(myExecutor);
  
  // Function to process the order and update the webpage
  function processOrder() {
    myFirstPromise.then((message) => {
      renderMessage(message);
    }).catch((error) => {
      renderMessage(error);
    });
  }
  
  // Function to render a message to the webpage
  function renderMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    document.body.appendChild(messageElement);
  }
  
  // Call processOrder to execute
  processOrder();
  