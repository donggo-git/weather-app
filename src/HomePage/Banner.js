import React from 'react'
import './Banner.css'
import { AiOutlineClose } from "react-icons/ai"
import { NavLink } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Banner({ data, RemoveLocation, changeDetailPage }) {
    let nightBackground = 'https://wallpapercave.com/wp/wp2077619.jpg'
    let rainNightBackground = 'https://wallpapercave.com/wp/wp2529651.jpg'
    let sunnyBackground = 'https://th.bing.com/th/id/OIP.rXupN4J01IrsMdJegwQLhQHaEY?w=275&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7';
    let rainBackground = 'https://ak7.picdn.net/shutterstock/videos/9915767/thumb/1.jpg';

    const notRainCondition = ["Partly cloudy", "Sunny", "Clear", "Mist", 'Overcast']
    let IsMorning = data?.current.is_day == 1;

    // check condition of the weather
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
            if (condition == "Partly cloudy" || condition == "Sunny" || condition == "Clear") {
                return nightBackground;
            }
            else {
                return rainNightBackground
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
                    onClick={() => changeDetailPage(data?.location.name)}
                >
                    <NavLink to="/detail" className='location'>
                        <h2 >{data?.location.name}</h2>
                    </NavLink>
                    <h2 className='temperature'>{data.current.temp_f}<div>o</div></h2>
                    <button
                        className='deleteButton'
                        onClick={() => RemoveLocation(data.location.name)}><AiOutlineClose />
                    </button>
                </div >
            </CSSTransition>
        </TransitionGroup >
    )
}

export default Banner
