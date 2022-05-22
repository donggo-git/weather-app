import React, { useState } from 'react'
import './HomePageHeader.css'
import { BsSearch } from 'react-icons/bs'
function LocationForm({ addLocation }) {
    const [location, setLocation] = useState("");
    const onChange = (e) => {
        setLocation(e.target.value);
    }
    const addSubmitLocation = () => {
        addLocation(location);
        setLocation("");

    }
    return (
        <div className="HomePageHeader">
            <h1 className="HomePageHeader__logo">Weather App</h1>
            <div className="HomePageHeader__input__container">
                <BsSearch
                    className="HomePageHeader__btn"
                    onClick={addSubmitLocation}
                />
                <input
                    type="text" placeholder="Add your location" className="HomePageHeader__input"
                    value={location} onChange={(e) => onChange(e)}
                />

            </div>

        </div>
    )
}

export default LocationForm
