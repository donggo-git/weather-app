import React from 'react'
import './DetailFooterLine.css'

function DetailFooterLine({ rightTitle, rightNumber, leftTitle, leftNumber }) {
    return (
        <div className="detailFooter_line">
            <div className="detailFooter_line_side">
                <p className="title">{leftTitle}</p>
                <p className="detailFooter_line_number">{leftNumber}</p>
            </div>
            <div className="detailFooter_line_side">
                <p className="title">{rightTitle}</p>
                <p className="detailFooter_line_number">{rightNumber}</p>
            </div>
        </div>
    )
}

export default DetailFooterLine