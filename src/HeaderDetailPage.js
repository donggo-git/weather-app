import React from 'react'
import './HeaderDetailPage.css';
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function HeaderDetailPage({ detailDataHeader, detailLocation }) {
    return (
        <div className="DetailPage__headerContainer">
            <Link to="/" className="backBtn" >
                <AiOutlineArrowLeft />
            </Link>
            <div className="DetailPage__header">

                <div className="DetailPage__header__location">
                    <h2>{detailLocation}</h2>
                    <p>{detailDataHeader?.current?.condition?.text}</p>
                </div>
                <div className="DetailPage__header__degree">
                    <div className="degreeContainer degreeF">
                        {detailDataHeader?.current?.temp_f}<div>o</div>
                    </div>
                    <div className="otherDegree">
                        <div className="degreeContainer">
                            C:{detailDataHeader?.current?.temp_c}<div>o</div>
                        </div>
                        <div className="degreeContainer">
                            T:{detailDataHeader?.current?.temp_c}<div>o</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderDetailPage
