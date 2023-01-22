import React from 'react'
import "./Result.css"
function Result(props) {

  return (
    <div className='card'>
      <div className='result'>
        
      </div>
        <h1>Sonuç : {props.trueAnswer*25} / <span className='resultFull'>100</span> </h1>
    </div>
  )
}

export default Result