import React from 'react'

function Banner({ location, temperature }) {
    return (
        <div className="Banner">
            <h2>{location}</h2>
            <h2>{temperature}<span>o</span></h2>
        </div>
    )
}

export default Banner
