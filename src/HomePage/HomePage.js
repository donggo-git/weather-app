import React from 'react'
import HomePageHeader from './HomePageHeader';
import Banner from './Banner';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./HomePage.css"

function HomePage({ addLocation, RemoveLocation, tempData, changeDetailPage }) {
    return (
        <div className='page'>
            <HomePageHeader
                addLocation={addLocation}
            />
            <TransitionGroup>
                {
                    tempData.map(tempLocation => (

                        <CSSTransition
                            key={tempLocation.location.name}
                            timeout={500}
                            classNames="item"
                        >
                            <Banner location={tempLocation?.location?.name}
                                temperature={tempLocation?.current.temp_f}
                                condition={tempLocation?.forecast.forecastday[0].day.condition.text}
                                RemoveLocation={RemoveLocation}
                                changeDetailPage={changeDetailPage}
                                data={tempLocation}

                            />

                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </div>
    )
}

export default HomePage
