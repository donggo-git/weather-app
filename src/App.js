import React, { useState, useEffect } from 'react'
import './App.css'
import HomePage from './HomePage';
import DetailPage from './DetailPage';
import request from './request'
function App() {
  const [location, setLocation] = useState(["Seattle"]);
  const [tempData, setTempData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const requests = await Promise.all(location.map(location => request(location)))
      setTempData(requests)
      return requests
    }
    fetchData()
  }, [location])

  const addLocation = (e) => {
    console.log(e)
    if ((e === "") || location.indexOf(e) != -1) {
      return;
    }
    else {
      let newLocation = [...location];
      newLocation.push(e);
      setLocation(newLocation);
    }
  }
  const RemoveLocation = (e) => {
    let newLocation = [...location];
    newLocation = newLocation.filter((locate) => locate !== e);
    console.log(newLocation)
    setLocation(newLocation);
  }
  return (
    <div>
      <HomePage
        locations={location}
        addLocation={addLocation}
        RemoveLocation={RemoveLocation}
        tempData={tempData}
      />
    </div>
  )
}

export default App
