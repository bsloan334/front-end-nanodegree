// Setup empty JS object to act as endpoint for all routes
var projectData = {}
// Express to run server and routes
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
// Start up an instance of app
var app = express()
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cors())

/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'))

// Spin up the server
// Callback to debug
var PORT = 8080
app.listen(PORT, listening)

function listening() {
   console.log("server is starting")
   console.log(`server is running on port: ${PORT}`)
}
// Initialize all route with a callback function
app.get("/all", sendAll)
// Callback function to complete GET '/all'
function sendAll(req, res) {
   res.send(projectData)
}

const postData = async (url = '', data = {}) => {
   const response  = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      header: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
   });
  
  try {
     const newData = await response.json()
     projectData = {
        temperature: newData.temperature,
        date: newData.date,
        userResponse: newData.userResponse
     }
     return newData;
  } catch (error) {
     console.log("error", error)
  }

};

// Post Route
app.post("/post", postData)


// function test() {
//     postData("/animal", {fav:'lion'})
//         .then(function(data){
//         console.log("getting data")
//     })
// }
// test()
