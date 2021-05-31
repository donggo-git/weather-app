import React, { useState } from 'react'
import './DetailPage.css';
import HeaderDetailPage from './HeaderDetailPage';
import HourTempToday from './HourTempToday';
import Forecast3Days from './Forecast3Days';
import DetailFooter from './DetailFooter';
import DetailFooterLine from './DetailFooterLine';

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
    console.log(detailData);
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
            <Forecast3Days forecastday={detailData?.forecast?.forecastday} />
            {
                //footer of the detailPage
            }
            <DetailFooter forecastday={detailData?.forecast?.forecastday[0]} />
        </div>
    )
}

export default DetailPage
