import React from "react";
import "./ChartBar.css"



export default function ChartBar(props) {


    let barFillHight = "0%"
    if(props.maxValue > 0){
        barFillHight = Math.round(  (props.value / props.maxValue) * 100 ) + "%"
    }
  return (
    <div className="chart-bar">
        <div className="chart-bar__inner">
                <div className="chart-bar__fill"style={{height:barFillHight} }>
        
                </div>

                <div className="chart-bar__label">
                    {props.monthName}
                </div>
        </div>
    </div>
  )
}
