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
      console.log(position)
      fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(res => res.json())
        .then(data => addLocation(data.city))
    })
  }, [])

  const fetchData = async function (location) {
    return fetch(`
    https://api.weatherapi.com/v1/
    forecast.json?key=${'dfa464158af4491f8e451132213004'}
    &q=${location}&days=7&aqi=no&alerts=no
    `)
  }

  const addLocation = (location) => {
    //if tempData has the location already, not add the location to data
    if (tempData.some(data => {
      return data.location.name === location
    })) return
    //fetch and add data to tempData
    fetchData(location).then(res => {
      if (!res.ok) console.error(`something went wrong`)
      return res.json()
    })
      .then(function (data) {
        setTempData([...tempData, data])
      })

  }
  const RemoveLocation = (e) => {
    console.log(e)
    let newData = [...tempData]
    newData = newData.filter(locate => locate.location.name !== e)
    setTempData(newData)
  }
  const changeDetailPage = (location) => {
    fetchData(location).then(res => {
      if (!res.ok) console.error(`something went wrong`)
      return res.json()
    })
      .then(function (data) {
        setDetailData(data);
        setDetailLocation(location)
      })
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
