import React from 'react'
import './Banner.css'
import { AiOutlineClose } from "react-icons/ai"
function Banner({ data, RemoveLocation, changeDetailPage }) {
    let nightBackground = 'https://th.bing.com/th/id/R11a1313280a58f3fedc57cfee0a42f27?rik=vRDvRgov3JJ%2f8Q&riu=http%3a%2f%2fweb.colby.edu%2fcensorshipeventsblog%2ffiles%2f2014%2f06%2fStarryNight3.jpg&ehk=BeggTW78z%2b0DnGAeVRqsUYVr2WRMT3PCrgV1RPjK0Mg%3d&risl=&pid=ImgRaw';
    let sunnyBackground = 'https://www.androidpolice.com/wp-content/uploads/2014/06/nexusae0_bg_weather_sunny_day.jpg';
    let rainBackground = 'https://ak7.picdn.net/shutterstock/videos/9915767/thumb/1.jpg';

    // check condition of the weather
    const checkCondition = (condition) => {
        if (condition == "Partly cloudy") {
            return sunnyBackground;
        }
        else {
            return rainBackground
        }
    }
    //data.location.name
    //data.current.temp_f
    //data.forecast.forecastday[0].day.condition.text
    //
    const styled = {
        backgroundImage: `
    linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), 
    url(${checkCondition(data.current?.condition?.text)}`
    };
    return (
        <div
            className="Banner__container"
            style={styled}
            onClick={() => changeDetailPage(data)}
        >
            <h2 className='location'>{data.location.name}</h2>
            <h2 className='temperature'>{data.current.temp_f}<div>o</div></h2>
            <button
                className='deleteButton'
                onClick={() => RemoveLocation(data.location.name)}><AiOutlineClose /></button>
        </div>
    )
}

export default Banner
