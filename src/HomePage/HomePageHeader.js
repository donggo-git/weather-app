import React, { useState, useEffect } from 'react'
import './HomePageHeader.css'
import { BsSearch } from 'react-icons/bs'
import useDebounce from '../Hooks/useDebounce';
import SearchLocationList from './SearchLocationList';
function LocationForm({ addLocation, changeDetailPage }) {
    const [locationInput, setLocationInput] = useState('')
    const [locationList, setLocationList] = useState([])
    const debounce = useDebounce(locationInput, 400)


    useEffect(() => {
        if (debounce == '') return;
        searchLocation(debounce)
    }, [debounce])
    const handleSearchInput = (input) => {
        setLocationInput(input)
    }
    const searchLocation = async (location) => {
        const res = await fetch(`https://api.weatherapi.com/v1/search.json?key=${'dfa464158af4491f8e451132213004'}&q=${location}`)
        const data = await res.json()
        setLocationList(data)
    }

    const addLocationInput = (e, location) => {
        addLocation(location);
        setLocationInput("");
    }
    return (
        <div className="HomePageHeader">
            <h1 className="HomePageHeader__logo">Weather App</h1>
            <div className="HomePageHeader__input__container">
                <BsSearch
                    className="HomePageHeader__btn"
                />
                <input
                    type="text" placeholder="Add your location" className="HomePageHeader__input"
                    onChange={(e) => handleSearchInput(e.target.value)}
                />
                {locationList.length > 0 ?
                    <SearchLocationList
                        locationList={locationList}
                        addLocationInput={addLocationInput}
                        changeDetailPage={changeDetailPage}
                    /> :
                    <div></div>
                }

            </div>

        </div>
    )
}

export default LocationForm
