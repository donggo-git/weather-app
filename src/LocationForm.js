import React, { useState } from 'react'
import './LocationForm.css'
import { BsSearch } from 'react-icons/bs'
function LocationForm() {
    const [location, setLocation] = ''
    const onChange = (e) => {
        setLocation(e.target.value);
    }
    return (
        <div className="LocationForm">
            <div className="LocationForm__content">
                <h1>Weather App</h1>
                <div className="LocationForm__addLocation__container">
                    <input
                        type="text" placeholder="Add your location" className="Location__input"
                        value={location} onChange={() => onChange}
                    />
                    <BsSearch />
                </div>
            </div>
        </div>
    )
}

export default LocationForm
