import React from 'react'
import './SearchLocationList.css'
import { RiAddFill } from 'react-icons/ri'

function SearchLocationList({ locationList, addLocationInput }) {
    return (
        <div className='LocationList'>
            {locationList.map(location => (
                <div
                    key={location.name}
                    className='SearchLocation__container'
                >

                    <p className='SearchLocation--name'>{location.name}, </p>
                    <p className='SearchLocation--region'>{location.region}</p>
                    <RiAddFill
                        className='SearchLocation__icon'
                        onClick={(e) => addLocationInput(e, location.name)}
                    />
                </div>
            ))}
        </div>
    )
}

export default SearchLocationList