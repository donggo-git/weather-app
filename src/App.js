import React, { useState, useEffect } from 'react'
import './App.css'
import HomePage from './HomePage/HomePage';
import DetailPage from './DetailPage/DetailPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  const [tempData, setTempData] = useState([]);
  const [detailData, setDetailData] = useState();
  const [detailLocation, setDetailLocation] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude: lat, longitude: lng } = position.coords
      fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(res => res.json())
        .then(data => addLocation(data.city))
    })
  }, [])

  const fetchData = async function (location) {
    return await fetch(`
    https://api.weatherapi.com/v1/
    forecast.json?key=${'dfa464158af4491f8e451132213004'}
    &q=${location}&days=7&aqi=no&alerts=no
    `)
  }
  //check location in tempData
  const checkLocation = (location) => {
    return tempData.some(data => data.location.name === location)
  }
  //add new location
  const addLocation = async (location) => {
    //if tempData has the location already, not add the location to data
    if (checkLocation(location)) return
    //fetch and add data to tempData
    try {
      const fetchRes = await fetchData(location)
      const dataFetched = await fetchRes.json()
      setTempData([...tempData, dataFetched])
    } catch (err) {
      console.error('something went wrong')
    }
  }
  //remove location
  const RemoveLocation = (e) => {
    console.log(e)
    let newData = [...tempData]
    newData = newData.filter(locate => locate.location.name !== e)
    setTempData(newData)
  }
  //fetch and change new data for detail page
  const changeDetailPage = async (location) => {
    const fetchRes = await fetchData(location)
    const dataFetched = await fetchRes.json()
    setDetailData(dataFetched)
    setDetailLocation(location)
  }
  return (
    <div>
      <Router>
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={500}
              classNames="fade"
            >
              <Switch itch>
                <Route path="/weather-app" component={() => (
                  < HomePage
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
                    addLocation={addLocation}
                    checkLocation={checkLocation}
                    RemoveLocation={RemoveLocation}
                  />)}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </Router>

    </div >
  )
}

export default App
