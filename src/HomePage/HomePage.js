import React from 'react'
import HomePageHeader from './HomePageHeader';
import Banner from './Banner';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./HomePage.css"

function HomePage({ addLocation, RemoveLocation, tempData, changeDetailPage }) {
    return (
        <div className='page'>
            <HomePageHeader
                addLocation={addLocation}
                changeDetailPage={changeDetailPage}
            />
            <TransitionGroup>
                {
                    tempData.length > 0 ?
                        tempData.map(tempLocation => (

                            <CSSTransition
                                key={tempLocation?.location?.name}
                                timeout={500}
                                classNames="item"
                            >
                                <Banner
                                    RemoveLocation={RemoveLocation}
                                    changeDetailPage={changeDetailPage}
                                    data={tempLocation}

                                />

                            </CSSTransition>
                        ))
                        : <div></div>
                }
            </TransitionGroup>
        </div>
    )
}

export default HomePage
