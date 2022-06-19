import React from 'react'
import './DetailFooterLine.css'
import ProgressBar from 'react-percent-bar';
import DetailFooterChance from './DetailFooterChance';

function DetailFooterLine({ rightTitle, rightNumber, leftTitle, leftNumber }) {
    console.log(Number(leftNumber))
    return (
        <div className="detailFooter_line">
            <div className="detailFooter_line_side">
                <p className="title">{leftTitle}</p>
                {//if the title is percent chance use the progress bar
                    leftTitle == "Rain chance" || leftNumber == "Snow chance" ?
                        <DetailFooterChance percent={leftNumber} chanceTitle={'rain'} /> :
                        <p className="detailFooter_line_number">{leftNumber}</p>
                }

            </div>
            <div className="detailFooter_line_side">
                <p className="title">{rightTitle}</p>
                {//if the title is percent chance use the progress bar
                    rightTitle == "Rain chance" || rightTitle == "Snow chance" ?
                        <DetailFooterChance percent={rightNumber} chanceTitle={'snow'} /> :
                        <p className="detailFooter_line_number">{rightNumber}</p>
                }
            </div>
        </div>
    )
}

export default DetailFooterLine
