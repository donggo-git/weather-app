import React from 'react'
import './SearchLocationList.css'

function SearchLocationList({ locationList }) {
    return (
        <div>
            {locationList.map(location => (
                <div>
                    <p>{location.name}</p>
                    <p>{location.region}</p>
                </div>
            ))}
        </div>
    )
}

export default SearchLocationList