import React, { useState } from 'react'
import './DetailPage.css';
import HeaderDetailPage from './HeaderDetailPage';
import HourTempToday from './HourTempToday';
import predit7Day from './predit7Day'

function DetailPage({ detailData, detailLocation }) {
    let sunnyBackground = 'https://www.androidpolice.com/wp-content/uploads/2014/06/nexusae0_bg_weather_sunny_day.jpg';
    let rainBackground = 'https://ak7.picdn.net/shutterstock/videos/9915767/thumb/1.jpg';
    let [backgroundImgLink, setBackgroundImgLink] = useState();
    const checkCondition = (condition) => {
        if (condition == "Partly cloudy" || condition == "Sunny" || condition == "Clear") {
            return sunnyBackground;
        }
        else {
            return rainBackground
        }
    }
    let backgroundStyle = {
        backgroundImage: `url(${checkCondition(detailData?.current?.condition?.text)})`
    }
    return (
        <div
            className="DetailPage"
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
            {
                //footer of the detailPage
            }
        </div>
    )
}

export default DetailPage
