import React from 'react';
import DetailFooterLine from './DetailFooterLine'

function DetailFooter({ forecastday }) {
    return (
        <div className='DetailFooter'>
            {/*sun set and sun rise*/}
            < DetailFooterLine
                leftTitle={"Sun rise"}
                leftNumber={forecastday?.astro?.sunrise}
                rightTitle={"Sun set"}
                rightNumber={forecastday?.astro?.sunset}
            />
            < DetailFooterLine
                leftTitle={"Rain chance"}
                leftNumber={forecastday?.day?.daily_chance_of_rain + "%"}
                rightTitle={"Snow chance"}
                rightNumber={forecastday?.day?.daily_chance_of_snow + "%"}
            />
            < DetailFooterLine
                leftTitle={"Precipitation"}
                leftNumber={forecastday?.day?.totalprecip_in}
                rightTitle={"Max wind"}
                rightNumber={forecastday?.day?.maxwind_mph}
            />
        </div>
    )
}

export default DetailFooter
