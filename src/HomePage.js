import React, { useState, useEffect } from 'react'
import LocationForm from './LocationForm';
import Banner from './Banner';


function HomePage({ location, addLocation, RemoveLocation, tempData, changeDetailPage }) {
    //location
    //addLocation
    //RemoveLocation
    //tempData
    //changeDetailPage
    return (
        <div className='page'>
            <LocationForm addLocation={addLocation} />
            {
                tempData.map(tempLocation => (
                    <Banner location={tempLocation.data.location.name}
                        temperature={tempLocation.data.current.temp_f}
                        condition={tempLocation.data.forecast.forecastday[0].day.condition.text}
                        RemoveLocation={RemoveLocation}
                        key={tempLocation.data.location.name}
                        changeDetailPage={changeDetailPage}
                        data={tempLocation.data}
                    />
                ))
            }

        </div>
    )
}

export default HomePage
