import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import LocationForm from './LocationForm';
import Banner from './Banner';
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

  }
  return (
    <div>
      <HomePage />
    </div>
  )
}

export default App
