import React from 'react'
import './Forecast3Days.css'

function Predit7Day({ forecastday }) {
    const modifyDate = (date) => {
        let arrDate = date.split('-');
        return arrDate.reverse().join("/")
    }
    return (
        <div className="Forecast3Days_container">
            {forecastday ? forecastday.map((day, index) => (
                <div className="Forecast1Day" key={index}>
                    <div className="Forecast1Day_date">{modifyDate(day.date)}</div>
                    <div className="Forecast1Day_img_container">
                        <img src={day.day.condition.icon} />
                    </div>
                    <div className="maxTemp">{day.day.maxtemp_f}</div>
                    <div className="minTemp">{day.day.mintemp_f}</div>
                </div>
            )) : undefined}
        </div>
    )
}

export default Predit7Day
