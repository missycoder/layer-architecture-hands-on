// Import necessary modules
const express = require('express'); 
// Create a new router object using Express's Router class
const router = express.Router(); 
// Import the createNewCustomer function from the `customersController` module
const { createNewCustomer } = require('../controller/customersController'); 


// Route for creating a new customer
router.post('/customers', createNewCustomer);
// ^ This route listens for HTTP POST requests to the '/customers' endpoint
// ^ When a POST request is received, the `createNewCustomer` function from the `customersController` 
// module is called to handle the request

// Export the router object
module.exports = router;
