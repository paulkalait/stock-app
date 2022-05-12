
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
                    backgroundColor: 'black',
                    borderColor: '#5ac53b',
                    borderWidth: 2,
                    pointBorderColor: 'rgba(0,0,0,0)',
                    pointBackgroundColor: 'rgba(0,0,0,0)',
                    pointHoverBackgroundColor: '#5ac53b',
                    pointHoverBorderColor: '#000000',
                    pointHoverBorderWidth: 4,
                    pointHoverRadius: 6,
                }

            ]
        }}

        options={
            {
                scales: {
                    yAxes: [{
                        ticks: {
                            display: true
                        }
                    }]
                }
            }
        }
        type='line'
  />
  )
}

export default  LineGraph
