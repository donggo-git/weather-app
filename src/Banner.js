import React from 'react'
import './Banner.css'

function Banner(props) {
    let nightBackground = 'https://th.bing.com/th/id/R11a1313280a58f3fedc57cfee0a42f27?rik=vRDvRgov3JJ%2f8Q&riu=http%3a%2f%2fweb.colby.edu%2fcensorshipeventsblog%2ffiles%2f2014%2f06%2fStarryNight3.jpg&ehk=BeggTW78z%2b0DnGAeVRqsUYVr2WRMT3PCrgV1RPjK0Mg%3d&risl=&pid=ImgRaw';
    let sunnyBackground = 'https://www.androidpolice.com/wp-content/uploads/2014/06/nexusae0_bg_weather_sunny_day.jpg';
    let rainBackground = 'https://th.bing.com/th/id/R859274a1ff64fb15f9b7d64de6bb549d?rik=m9alB4s0vd5v1Q&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f3%2fe%2f4%2f924867-vertical-sunny-day-background-2574x2000-windows-10.jpg&ehk=u9YJyLQEpP3sEyftZOVDK7aFl1j87Br%2bC2TbHF5p%2bMw%3d&risl=&pid=ImgRaw';

    // check condition of the weather
    const checkCondition = (condition) => {
        if (condition == "Partly cloudy") {
            return sunnyBackground;
        }
        else {
            return rainBackground
        }
    }
    const styled = {
        backgroundImage: `
    linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), 
    url(${checkCondition(props.condition)}`
    };
    return (
        <div
            className="Banner__container"
            style={styled}
        >
            <h2 className='location'>{props.location}</h2>
            <h2 className='temperature'>{props.temperature}<div>o</div></h2>
            <button onClick={() => props.RemoveLocation(props.location)}></button>
        </div>
    )
}

export default Banner
