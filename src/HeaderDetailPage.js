import React from 'react'
import './HeaderDetailPage.css';

function HeaderDetailPage({ detailDataHeader, detailLocation }) {
    return (
        <div className="DetailPage__headerContainer">
            <div className="DetailPage__header">
                <div className="DetailPage__header__location">
                    <h2>{detailLocation}</h2>
                    <p>{detailDataHeader?.current.condition.text}</p>
                </div>
                <div className="degreeContainer degreeF">
                    50<div>o</div>
                </div>
                <div className="otherDegree">
                    <div className="degreeContainer">
                        C:59<div>o</div>
                    </div>
                    <div className="degreeContainer">
                        T:43<div>o</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderDetailPage
