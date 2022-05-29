import React, { useState, useEffect } from 'react'
import './HomePageHeader.css'
import { BsSearch } from 'react-icons/bs'
import useDebounce from 'C:/project/weather-app/src/Hooks/useDebounce';
import SearchLocationList from './SearchLocationList';
function LocationForm({ addLocation, searchLocation, locationList }) {
    const [location, setLocation] = useState("");
    const [locationInput, setLocationInput] = useState('')
    const debounce = useDebounce(locationInput, 500)
    useEffect(() => {
        if (debounce == '') return;
        searchLocation(debounce)
    }, [debounce])
    const handleSearchInput = (input) => {
        setLocationInput(input)
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
                    onChange={(e) => handleSearchInput(e.target.value)}
                />
                {locationList.length > 0 ?
                    <SearchLocationList locationList={locationList} /> :
                    <div></div>
                }

            </div>

        </div>
    )
}

export default LocationForm
