import React from 'react'
import './LocationForm.css'

function LocationForm() {
    return (
        <div className="LocationForm">
            <div className="LocationForm__content">
                <h1>ENTER YOUR LOCATION</h1>
                <input type="text" placeholder="Enter your location" className="Location__input" />
            </div>
        </div>
    )
}

export default LocationForm
