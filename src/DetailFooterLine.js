import React from 'react'

function DetailFooterLine({ rightTitle, rightNumber, leftTitle, leftNumber }) {
    return (
        <div className="detailFooter_line">
            <div className="detailFooter_line_left">
                <p className="title">{leftTitle}</p>
                <p className="number">{leftNumber}</p>
            </div>
            <div className="detailFooter_line_right">
                <p className="title">{rightTitle}</p>
                <p className="number">{rightNumber}</p>
            </div>
        </div>
    )
}

export default DetailFooterLine
