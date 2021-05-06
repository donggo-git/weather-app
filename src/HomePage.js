import React from 'react'
import LocationForm from './LocationForm';
import Banner from './Banner';

function homePage() {
    return (
        <div>
            <LocationForm />
            <Banner location="Seattle" temperature={52} />
        </div>
    )
}

export default homePage
