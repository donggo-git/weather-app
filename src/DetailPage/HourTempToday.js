import React from 'react'
import './HourTempToday.css'

function HourTempToday({ hours }) {
    return (
        <div className="HourTempContainer">
            {hours ?
                hours.map(hour => (
                    <div className="hourContainer" key={hour.time}>
                        <div>{hour.time.split(" ")[1]}</div>
                        <img src={hour.condition.icon} />
                        <div>{hour.temp_f}</div>
                    </div>
                )) : undefined
            }
        </div >
    )
}
//http://cdn.weatherapi.com/weather/64x64/night/116.png
export default HourTempToday
