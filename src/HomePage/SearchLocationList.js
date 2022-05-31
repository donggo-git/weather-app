import React from 'react'
import './SearchLocationList.css'

function SearchLocationList({ locationList, addLocationInput }) {
    return (
        <div className='LocationList'>
            {locationList.map(location => (
                <div
                    key={location.name}
                    className='SearchLocation__container'
                    onClick={() => addLocationInput(location.name)}
                >
                    <p className='SearchLocation--name'>{location.name}, </p>
                    <p className='SearchLocation--region'>{location.region}</p>
                </div>
            ))}
        </div>
    )
}

export default SearchLocationList