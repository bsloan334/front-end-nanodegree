// Personal API Key for OpenWeatherMap API
let apiKey = "&appid=8236f58324f3cf812020b624dc9b3174"
let baseURL = "http://api.openweathermap.org/data/2.5/weather?zip="

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", fetchWeather)

/* Function called by event listener */
function fetchWeather() {
   var zip = document.getElementById("zip").value
   var data = getWeatherData(baseURL, apiKey, zip)
      .then(postData("/post", data))
}
/* Function to GET Web API Data*/
const getWeatherData = async (baseURL, apiKey, zip) => {
   const response = await fetch(baseURL + zip + apiKey)

   try{
      const data = await response.json()
      console.log(data)
      return data
   } catch(error) {
      console.log("error", error)
   }
}

/* Function to POST data */
var projectData = {}

const postData = async (url = '', data = {}) => {
   const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
   })

   try{
      const newData = response.json()
      projectData = {
         temperature: newData.temperature,
         date: newData.date,
         userResponse: newData.userResponse
      }
   } catch(error){
      console.log("error", error)
   }
}

/* Function to GET Project Data */
