import React, { useState, useEffect } from 'react'
import LocationForm from './LocationForm';
import Banner from './Banner';


function HomePage(props) {


    return (
        <div>
            <LocationForm addLocation={props.addLocation} />
            {
                props.tempData.map(tempLocation => (
                    <Banner location={tempLocation.data.location.name}
                        temperature={tempLocation.data.current.temp_f}
                        condition={tempLocation.data.forecast.forecastday[0].day.condition.text}
                        RemoveLocation={props.RemoveLocation}
                        key={tempLocation.data.location.name} />
                ))
            }

        </div>
    )
}

export default HomePage
