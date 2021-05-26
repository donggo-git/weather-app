import React from 'react'
import './DetailPage.css';
import HeaderDetailPage from './HeaderDetailPage';

function DetailPage({ detailData, detailLocation }) {
    let sunnyBackground = 'https://www.androidpolice.com/wp-content/uploads/2014/06/nexusae0_bg_weather_sunny_day.jpg';
    let rainBackground = 'https://ak7.picdn.net/shutterstock/videos/9915767/thumb/1.jpg';
    const checkCondition = (condition) => {
        if (condition == "Parttly cloudy") {
            return sunnyBackground;
        }
        else {
            return rainBackground
        }
    }
    const backgroundStyle = {
        backgroundImage: `url(${checkCondition(detailData[0]?.day.condition.text)}})`
    }
    console.log(detailData[0]);
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
