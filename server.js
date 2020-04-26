// Dependencies
const express = require('express');
const app = express();

// listen for when someone goes to
// localhost:3000/
// upon getting a request at that URL
// send text 'Hello World'

// Routes
app.get('/', (req, res) => {
  console.log("Oh hey! I got a request. Let me respond with something");
  res.send('Hello World! Website coming soon');
});

app.get('/somedata', (request, response)=>{
  // console.log('response: ', response);
  // console.log('===================');
  response.send('here is your information');
});

// App Listen
app.listen(3000, ()=> {
  console.log("I am listening for requests!!!");
});