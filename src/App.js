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
      console.log(position)
    })
  }, [])

  const fetchData = async function (location) {
    fetch(`
    https://api.weatherapi.com/v1/
    forecast.json?key=${'dfa464158af4491f8e451132213004'}
    &q=${location}&days=7&aqi=no&alerts=no
    `)
      .then(res => {
        if (!res.ok) console.error(`something went wrong`)
        return res.json()
      })
      .then(function (data) {
        setTempData([...tempData, data])
      })

  }

  const addLocation = (location) => {
    //if tempData has the location already, not add the location to data
    if (tempData.some(data => {
      return data.location.name === location
    })) return
    fetchData(location)
  }
  const RemoveLocation = (e) => {
    console.log(e)
    let newData = [...tempData]
    newData = newData.filter(locate => locate.location.name !== e)
    setTempData(newData)
  }
  const changeDetailPage = (e) => {
    setDetailData(e);
    setDetailLocation(e.location.name)
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
