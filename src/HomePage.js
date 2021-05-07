import React from 'react'
import LocationForm from './LocationForm';
import Banner from './Banner';

function homePage(props) {
    console.log(props.locations);
    return (
        <div>
            <LocationForm addLocation={props.addLocation} />
            {
                props.locations.map(location => (
                    <Banner location={location} temperature={52} key={location} />
                ))
            }

        </div>
    )
}

export default homePage
