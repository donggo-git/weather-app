import React, { useState } from 'react'
import './DetailPage.css';
import HeaderDetailPage from './HeaderDetailPage';

function DetailPage({ detailData, detailLocation }) {
    let sunnyBackground = 'https://www.androidpolice.com/wp-content/uploads/2014/06/nexusae0_bg_weather_sunny_day.jpg';
    let rainBackground = 'https://ak7.picdn.net/shutterstock/videos/9915767/thumb/1.jpg';
    let [backgroundImgLink, setBackgroundImgLink] = useState();
    const checkCondition = (condition) => {
        if (condition == "Parttly cloudy" || condition == "Sunny" || condition == "Clear") {
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

            {
                //footer of the detailPage
            }
        </div>
    )
}

export default DetailPage
