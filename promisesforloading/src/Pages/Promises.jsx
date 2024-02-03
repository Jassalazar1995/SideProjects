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
  const orderSunglasses = () => {
    return new Promise(myExecutor);
    }

  // Saving the promise
  const orderPromise = orderSunglasses()

  console.log(orderPromise)

export default orderPromise;

  