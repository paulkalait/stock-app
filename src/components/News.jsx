import React from 'react'
import LineGraph from './LineGraph'
import '../News.css'

const News = () => {
  return (
    <div className='news'>
    <div className='news__container'>
        <div className='news__chart'>
        <div className='news__portfolio'>
        <h1>100,000</h1>
        <p>+44.63 (+0.04%) Today</p>
        </div></div>
        <div className='news_chartSection'>

        <LineGraph className='lineGraph'/> 

        </div>
    </div>
    </div>
  )
}

export default News;