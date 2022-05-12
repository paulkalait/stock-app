import { data } from 'browserslist'
import { blue } from 'colorette'
import React from 'react'
import {Line} from 'react-chartjs-2'

export const LineGraph = () => {

    const data = [{
        x: 10,
        y: 20
    },
    {
        x:15,
        y: 10
    }
]
  return (
    <Line
        data={{
            datasets: [
                {
                    type: 'line',
                    data: data,
                    
                }

            ]
        }}
        type='line'
  />
  )
}

export default  LineGraph
