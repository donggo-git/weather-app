import React from 'react'
import HomePageHeader from './HomePageHeader';
import Banner from './Banner';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./HomePage.css"

function HomePage({ addLocation, RemoveLocation, tempData, changeDetailPage, searchLocation, locationList }) {
    return (
        <div className='page'>
            <HomePageHeader
                addLocation={addLocation}
                searchLocation={searchLocation}
                locationList={locationList}
            />
            <TransitionGroup>
                {
                    tempData.map(tempLocation => (

                        <CSSTransition
                            key={tempLocation.data.location.name}
                            timeout={500}
                            classNames="item"
                        >
                            <Banner location={tempLocation.data.location.name}
                                temperature={tempLocation.data.current.temp_f}
                                condition={tempLocation.data.forecast.forecastday[0].day.condition.text}
                                RemoveLocation={RemoveLocation}
                                changeDetailPage={changeDetailPage}
                                data={tempLocation.data}

                            />

                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </div>
    )
}

export default HomePage
