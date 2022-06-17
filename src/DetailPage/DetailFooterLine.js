import React from 'react'
import './DetailFooterLine.css'
import ProgressBar from 'react-percent-bar';

function DetailFooterLine({ rightTitle, rightNumber, leftTitle, leftNumber }) {
    console.log(Number(leftNumber))
    const convertPercentToNumber = function (percent) {
        console.log(percent)
        const convertedNumber = Number(percent?.split('%')[0])
        console.log(convertedNumber)
        return convertedNumber;
    }
    return (
        <div className="detailFooter_line">
            <div className="detailFooter_line_side">
                <p className="title">{leftTitle}</p>
                {//if the title is percent chance use the progress bar
                    leftTitle == "Rain chance" || leftNumber == "Snow chance" ?
                        <ProgressBar colorShift={true} fillColor="orange" percent={convertPercentToNumber(leftNumber)} /> :
                        <p className="detailFooter_line_number">{leftNumber}</p>
                }

            </div>
            <div className="detailFooter_line_side">
                <p className="title">{rightTitle}</p>
                {//if the title is percent chance use the progress bar
                    rightTitle == "Rain chance" || rightTitle == "Snow chance" ?
                        <ProgressBar colorShift={true} fillColor="orange" percent={convertPercentToNumber(rightNumber)} /> :
                        <p className="detailFooter_line_number">{rightNumber}</p>
                }
            </div>
        </div>
    )
}

export default DetailFooterLine
