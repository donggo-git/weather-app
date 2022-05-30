import React from 'react'
import './SearchLocationList.css'

function SearchLocationList({ locationList }) {
    return (
        <div className='LocationList'>
            {locationList.map(location => (
                <div className='SearchLocation__container'>
                    <p className='SearchLocation--name'>{location.name}, </p>
                    <p className='SearchLocation--region'>{location.region}</p>
                </div>
            ))}
        </div>
    )
}

export default SearchLocationList