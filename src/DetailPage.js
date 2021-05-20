import React from 'react'
import './DetailPage.css'

function DetailPage() {
    return (
        <div className="DetailPage">
            {//Header of detailPage
            }
            <div className="DetailPage__headerContainer">
                <div className="DetailPage__header">
                    <div className="DetailPage__header__location">
                        <h2>Seattle</h2>
                        <p>Possibly rain</p>
                    </div>
                    <h1>50o</h1>
                    <p>C:59o T:43o</p>
                </div>
            </div>
            {
                //content of detailPage
            }
            {
                //footer of the detailPage
            }
        </div>
    )
}

export default DetailPage
