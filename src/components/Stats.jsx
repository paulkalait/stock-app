import axios from "axios";
import StatsRow from "./StatsRow";
import React, { useState, useEffect } from "react";
import "../Stats.css";

const BASE_URL = 'https://finnhub.io/api/v1/quote'
// API Key
const TOKEN = 'c9unvriad3i95k2bm71g'
const Stats = () => {
  
  const [stockData, setStockData] = useState([])

  const getStockData = (stock) =>{
    // axious is a package to do a git request
    return axios
    .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
    .catch((error)=>{
      console.log("Error", error.message)
    })
  }

useEffect(()=> {
  let tempStocksData = []
  let  stocksList = ['AAPL', 'MSFT', 'TSLA', 'BABA', 'UBER', 'UPST']
  let promise = []

   stocksList.map((stock) => {
     promise.push(
       getStockData(stock)
       .then((res) => {
         console.log(res)
         tempStocksData.push({
           name: stock,
          // spread operater puts the response data inside
           ...res.data
         });
        })
     )
   });

   Promise.all(promise).then(() => {
     setStockData(tempStocksData)
     console.log(tempStocksData)
   })

}, [])


  return (
    <div className="stats">
      <div className="stats_container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
         
          </div> 
        </div>
        <div className="stats__content">
          <div className="stats__header">
          <p>Lists</p>
          </div>
          <div className="stats__rows">
            {stockData.map((stock) => (
              <StatsRow 
              key={stock.name}
              name={stock.name}
              openPrice={stock.o}
              price={stock.c}
              />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
