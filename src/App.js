import React, { useState, useEffect } from 'react'
import './App.css'
import HomePage from './HomePage';
import DetailPage from './DetailPage';
import request from './request';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  const [location, setLocation] = useState(["Seattle"]);
  const [tempData, setTempData] = useState([]);
  const [detailData, setDetailData] = useState();
  const [detailLocation, setDetailLocation] = useState();
  useEffect(() => {
    async function fetchData() {
      const requests = await Promise.all(location.map(location => request(location)))
      setTempData(requests)
      return requests
    }
    fetchData()
  }, [location])

  const addLocation = (e) => {
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
    setLocation(newLocation);
  }
  const changeDetailPage = (e) => {
    setDetailData(e);
    setDetailLocation(e.location.name)
  }
  return (
    <div>
      <BrowserRouter>
        <switch>
          <Route path="/" component={() => (
            < HomePage
              locations={location}
              addLocation={addLocation}
              RemoveLocation={RemoveLocation}
              tempData={tempData}
              changeDetailPage={changeDetailPage}
            />)}
            exact
          />
          <Route path="/detail" component={() => (
            <DetailPage
              detailData={detailData}
              detailLocation={detailLocation}
            />)}
          />
        </switch>
      </BrowserRouter>
    </div>
  )
}

export default App
