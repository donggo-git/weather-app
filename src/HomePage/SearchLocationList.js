import React from 'react'
import './SearchLocationList.css'
import { RiAddFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

function SearchLocationList({ locationList, addLocationInput, changeDetailPage }) {
    return (
        <div className='LocationList'>
            {locationList.map(location => (
                <div
                    key={location.name}
                    className='SearchLocation__container'
                    onClick={() => changeDetailPage(location.name)}
                >
                    <NavLink to="/detail" className="SearchLocation__location">
                        <p className='SearchLocation--name'>{location.name}, </p>
                        <p className='SearchLocation--region'>{location.region}</p>
                    </NavLink>
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