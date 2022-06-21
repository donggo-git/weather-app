import React from 'react'
import './DetailPage.css';
import HeaderDetailPage from './HeaderDetailPage';
import HourTempToday from './HourTempToday';
import Forecast3Days from './Forecast3Days';
import DetailFooter from './DetailFooter';

function DetailPage({ detailData, detailLocation, addLocation, checkLocation, RemoveLocation }) {
    let IsMorning = detailData?.current.is_day == 1;
    let sunnyBackground = 'https://th.bing.com/th/id/OIP.rXupN4J01IrsMdJegwQLhQHaEY?w=275&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7';
    let rainBackground = 'https://ak7.picdn.net/shutterstock/videos/9915767/thumb/1.jpg';
    let nightBackground = 'https://wallpapercave.com/wp/wp2077619.jpg'
    let rainNightBackground = 'https://wallpapercave.com/wp/wp2529651.jpg'
    const notRainCondition = ["Partly cloudy", "Sunny", "Clear", "Mist", 'Overcast']

    const checkCondition = (condition) => {
        if (IsMorning) {
            if (notRainCondition.indexOf(condition) >= 0) {
                return sunnyBackground;
            }
            else {
                return rainBackground
            }
        }
        else {
            if (notRainCondition.indexOf(condition) >= 0) {
                return nightBackground;
            }
            else {
                return rainNightBackground
            }
        }
    }
    let backgroundStyle = {
        backgroundImage: `url(${checkCondition(detailData?.current?.condition?.text)})`
    }

    return (
        <div
            className="DetailPage "
            style={backgroundStyle}>
            {//Header of detailPage
            }
            <HeaderDetailPage
                detailDataHeader={detailData}
                detailLocation={detailLocation}
                addLocation={addLocation}
                checkLocation={checkLocation}
                RemoveLocation={RemoveLocation}
            />
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
