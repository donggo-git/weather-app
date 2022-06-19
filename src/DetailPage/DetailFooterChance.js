import React from 'react'
import './DetailFooterChance.css'
import ProgressBar from 'react-percent-bar';

function DetailFooterChance({ percent, chanceTitle }) {
    const convertPercentToNumber = function (percent) {
        const convertedNumber = Number(percent?.split('%')[0])
        return convertedNumber;
    }
    return (
        <div className='DetailFooterChance'>
            <div className='DetailFooterChance__limit'>
                <p>0%</p>
                <p>100%</p>
            </div>
            <div className='DetailFooterChance__progressBar'>
                <ProgressBar
                    colorShift={false}
                    fillColor="rgb(0, 115, 230)"
                    borderColor="transparent"
                    percent={convertPercentToNumber(percent)}
                    width={
                        window.innerWidth > 1000 ?
                            '375px' :
                            window.innerWidth > 800 ?
                                '200px' :
                                '100px'
                    }

                />
                <div
                    className='DetailFooterChance__progressBar--percent'
                    style={{ left: percent }}
                >
                    {percent} {chanceTitle}
                </div>
            </div>
        </div>
    )
}

export default DetailFooterChance