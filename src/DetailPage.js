import React, { useState } from 'react'
import './DetailPage.css';
import HeaderDetailPage from './HeaderDetailPage';
import HourTempToday from './HourTempToday';
import Forecast3Days from './Forecast3Days';
import DetailFooter from './DetailFooter';

function DetailPage({ detailData, detailLocation }) {
    let hour = new Date().getHours();
    let IsMorning = hour >= 12 ? true : false;
    let sunnyBackground = 'https://www.androidpolice.com/wp-content/uploads/2014/06/nexusae0_bg_weather_sunny_day.jpg';
    let rainBackground = 'https://ak7.picdn.net/shutterstock/videos/9915767/thumb/1.jpg';
    let nightBackground = 'https://wallpapercave.com/wp/wp2077619.jpg'
    let rainNightBackground = 'https://wallpapercave.com/wp/wp2529651.jpg'
    let sunset = parseInt(detailData?.forecast?.forecastday[0]?.astro?.sunset.split(":")[0])
    const notRainCondition = ["Partly cloudy", "Sunny", "Clear", "Mist"]

    const checkCondition = (condition) => {
        console.log(hour - 12)
        if (IsMorning && (hour - 12 > sunset)) {
            if (notRainCondition.indexOf(condition) >= 0) {
                return nightBackground;
            }
            else {
                return rainNightBackground;
            }
        }
        else {
            if (condition == "Partly cloudy" || condition == "Sunny" || condition == "Clear") {
                return sunnyBackground;
            }
            else {
                return rainBackground
            }
        }
    }
    let backgroundStyle = {
        backgroundImage: `url(${checkCondition(detailData?.current?.condition?.text)})`
    }

    return (
        <div
            className="DetailPage page"
            style={backgroundStyle}>
            {//Header of detailPage
            }
            <HeaderDetailPage
                detailDataHeader={detailData}
                detailLocation={detailLocation} />
            {
                //content of detailPage
            }
            <HourTempToday
                hours={detailData?.forecast?.forecastday[0]?.hour}
            />
            <Forecast3Days forecastday={detailData?.forecast?.forecastday} />
            {
                //footer of the detailPage
            }
            <DetailFooter forecastday={detailData?.forecast?.forecastday[0]} />
        </div>
    )
}

export default DetailPage
