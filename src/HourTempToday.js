import React from 'react'

function HourTempToday({ hours }) {
    return (
        <div>
            {hours ?
                hours.map(hour => (
                    <div className="hourContainer" key={hour.time}>
                        <div>{hour.time}</div>
                        <img src={hour.condition.icon} height="50%" width="50%" />
                        <div>{hour.temp_f}</div>
                    </div>
                )) : undefined
            }
        </div >
    )
}
//http://cdn.weatherapi.com/weather/64x64/night/116.png
export default HourTempToday
