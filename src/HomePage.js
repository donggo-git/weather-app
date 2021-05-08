import React, { useEffect } from 'react'
import LocationForm from './LocationForm';
import Banner from './Banner';
import axios from 'axios'

function HomePage(props) {
    useEffect(() => {
        async function fetchData() {

            const request = await Promise.all(props.locations.map(location => {
                return axios.get(`http://api.weatherapi.com/v1/current.json?key=dfa464158af4491f8e451132213004&q=${location}&aqi=no`);
            }))
            console.log(request)
            return request
        }
        fetchData()
    }, [props.locations])
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

export default HomePage
