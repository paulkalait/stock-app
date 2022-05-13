import React from 'react'
import '../StatsRow.css'
import stockSVG from '../stockChart.svg'


// props is passing in the stocks values from statsrowlike parameters
const StatsRow = (props) => {

  let percentage = ((props.price - props.openPrice)/props.openPrice * 100) 
  return (
    <div className='row'>
    <div className='row__body'>
        <h1>{props.name}</h1>
        <p>{props.shares && (props.shares + "shares")}</p>
    </div>
    <div className="row__chart">
   <img src={stockSVG} height={15} width={80}/>
    </div>
    <div className="row__numbers">
    <p className='row_price'>{Number(props.price).toFixed(2)}</p>
    <p className='row_percentage'>{Number(percentage).toFixed(2)}%</p>
    
    </div>
    </div>
  )
}

export default StatsRow