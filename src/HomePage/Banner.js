import React from 'react'
import './Banner.css'
import { AiOutlineClose } from "react-icons/ai"
import { NavLink } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Banner({ data, RemoveLocation, changeDetailPage }) {
    let nightBackground = 'https://wallpapercave.com/wp/wp2077619.jpg'
    let rainNightBackground = 'https://wallpapercave.com/wp/wp2529651.jpg'
    let sunnyBackground = 'https://www.androidpolice.com/wp-content/uploads/2014/06/nexusae0_bg_weather_sunny_day.jpg';
    let rainBackground = 'https://ak7.picdn.net/shutterstock/videos/9915767/thumb/1.jpg';

    const notRainCondition = ["Partly cloudy", "Sunny", "Clear", "Mist"]
    let sunset = parseInt(data?.forecast?.forecastday[0]?.astro?.sunset.split(":")[0])
    let hour = new Date().getHours();
    let IsMorning = hour >= 12 ? true : false;

    // check condition of the weather
    const checkCondition = (condition) => {
        if (IsMorning && (hour - 12 > sunset)) {
            if (notRainCondition.indexOf(condition) >= 0) {
                return nightBackground;
            }
            else {
                return rainNightBackground
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
    const styled = {
        backgroundImage: `
    linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0)), 
    url(${checkCondition(data.current?.condition?.text)}`
    };
    return (
        <TransitionGroup>
            <CSSTransition
                key={data}
                timeout={500}
                classNames="item"
            >
                <div
                    className="Banner__container"
                    style={styled}
                    onClick={() => changeDetailPage(data)}
                >
                    <NavLink to="/detail" className='location'>
                        <h2 >{data.location.name}</h2>
                    </NavLink>
                    <h2 className='temperature'>{data.current.temp_f}<div>o</div></h2>
                    <button
                        className='deleteButton'
                        onClick={() => RemoveLocation(data.location.name)}><AiOutlineClose /></button>
                </div >
            </CSSTransition>
        </TransitionGroup >
    )
}

export default Banner
