import React, { useState, useEffect } from 'react'
import LocationForm from './LocationForm';
import Banner from './Banner';
import axios from 'axios'

function HomePage(props) {
    const [tempData, setTempData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const requests = await Promise.all(props.locations.map(location => {
                const request = axios.get(`http://api.weatherapi.com/v1/current.json?key=dfa464158af4491f8e451132213004&q=${location}&aqi=no`)

                return request;
            }))
            setTempData(requests)
            return requests
        }
        fetchData()
    }, [props.locations])
    console.log(tempData);
    return (
        <div>
            <LocationForm addLocation={props.addLocation} />
            {
                tempData.map(tempLocation => (
                    <Banner location={tempLocation.data.location.name}
                        temperature={tempLocation.data.current.temp_f}
                        condition={tempLocation.data.current.text}
                        key={tempLocation.data.location.name} />
                ))
            }

        </div>
    )
}

export default HomePage
