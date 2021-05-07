import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import HomePage from './HomePage';
function App() {
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("http://api.weatherapi.com/v1/current.json?key=dfa464158af4491f8e451132213004&q=Seattle&aqi=no");
      console.log(request.data.current)
      return request
    }
    fetchData()
  }, [])
  const [location, setLocation] = useState(["Seattle"])
  const addLocation = (e) => {
    console.log(e)
    if (e === "") {
      return;
    }
    else {
      let newLocation = [...location];
      newLocation.push(e);
      setLocation(newLocation);
    }
  }

  return (
    <div>
      <HomePage locations={location} addLocation={addLocation} />
    </div>
  )
}

export default App
