import axios from "axios";
import StatsRow from "./StatsRow";
import { db } from '../firebase'
import React, { useState, useEffect } from "react";
import "../Stats.css";

const BASE_URL = 'https://finnhub.io/api/v1/quote'
// API Key
const TOKEN = 'c9unvriad3i95k2bm71g'
const Stats = () => {
  // grab personal stock data 
  const [stockData, setStockData] = useState([])
  const [ myStocks, setMyStocks] = useState([])

  const getMyStocks = () => {
    db
    .collection('myStocks')
    .onSnapshot(snapshot => {
      console.log(snapshot.docs)
      let promise = []
      let tempData = []
      console.log(doc.data)
      snapshot.docs.map((doc) => {
        promise.push(getStocksData(doc.data().ticker))
        .then(res => {
          tempData.push({
            id: doc.id,
            data:doc.data(),
            info: res.data
          })
        })
        Promise.all(promise).then(()=>{
          setMyStocks(tempData)
        })
      })
    })
  }




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
  // watch this
  
  
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
         {myStocks.map((stock) => (
           <StatsRow 
           key={stock.data.ticker}
           name={stock.data.ticker}
           openPrice={stock.info.o}
           volume={stock.data.shares}
           price={stock.info.c}/>
         ))}
         
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
