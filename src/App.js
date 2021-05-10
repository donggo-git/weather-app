import React, { useState, useEffect } from 'react'
import './App.css'
import HomePage from './HomePage';
function App() {
  const [location, setLocation] = useState(["Seattle"])


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
      <HomePage locations={location} addLocation={addLocation} RemoveLocation={RemoveLocation} />
    </div>
  )
}

export default App
