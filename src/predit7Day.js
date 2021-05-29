import React from 'react'

function predit7Day({ forecast }) {
    return (
        <div>
            {forecast?.forecastday.map(day => (
                <div>
                    <div className="">{day.time}</div>
                    <img src={day.icon} />
                    <div className="maxT"></div>
                </div>
            ))}
        </div>
    )
}

export default predit7Day
