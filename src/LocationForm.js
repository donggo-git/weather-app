import React, { useState } from 'react'
import './LocationForm.css'
import { BsSearch } from 'react-icons/bs'
function LocationForm({ addLocation }) {
    const [location, setLocation] = useState("");
    const [submitLocation, setSubmitLocation] = useState("")
    const onChange = (e) => {
        setLocation(e.target.value);
    }
    const addSubmitLocation = () => {
        addLocation(location);
        setLocation("");

    }
    return (
        <div className="LocationForm">
            <div className="LocationForm__content">
                <h1>Weather App</h1>
                <div className="LocationForm__addLocation__container">
                    <input
                        type="text" placeholder="Add your location" className="Location__input"
                        value={location} onChange={(e) => onChange(e)}
                    />
                    <BsSearch
                        className="LocationForm__btn"
                        onClick={addSubmitLocation}
                    />
                </div>
            </div>
        </div>
    )
}

export default LocationForm
