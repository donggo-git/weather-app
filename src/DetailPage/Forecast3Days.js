import React from 'react'
import './Forecast3Days.css'

function Predit7Day({ forecastday }) {
    const modifyDate = (date) => {
        let arrDate = date.split('-');
        return arrDate.reverse().join("/")
    }
    return (
        <div className="Forecast3Days__container">
            {forecastday ? forecastday.map((day, index) => (
                <div className="Forecast1Day" key={index}>
                    <div className="Forecast1Day__date">{modifyDate(day.date)}</div>
                    <div className="Forecast1Day__img--container">
                        <img src={day.day.condition.icon} />
                    </div>
                    <div className="Forecast1Day__maxTemp Forecast1Day__Temp">{day.day.maxtemp_f}<span>o</span></div>
                    <div className="Forecast1Day__minTemp Forecast1Day__Temp">{day.day.mintemp_f}<span>o</span></div>
                </div>
            )) : undefined}
        </div>
    )
}

export default Predit7Day
