import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="Header">
            <h2>Current</h2>
            <h1>52<span>o</span></h1>
            <div className="Header__degreeContainer">
                <div className="Header__degreeC">
                    <p>C: 61<span>o</span></p>
                </div>
                <div className="Header__degreeT">
                    <p>T: 46<span>o</span></p>
                </div>
            </div>
        </div>
    )
}

export default Header
