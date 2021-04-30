import React, { useState, useEffect } from 'react'
import axios from 'axios'
function App() {
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("http://api.weatherapi.com/v1/current.json?key=dfa464158af4491f8e451132213004&q=Seattle&aqi=no");
      console.log(request.data.current)
      return request
    }
    fetchData()
  }, [])
  return (
    <div>

    </div>
  )
}

export default App
