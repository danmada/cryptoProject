import react, {useEffect, useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";


import Header from "./Header";
import MainPage from "./MainPage";


function App() {

//    console.log(myCryptoFeed)
// const handleChange = (e) => {
//   setSearch(e.target.value)
// }
//core code to update crypto list against search value using (e.target.value) on input box
// const searchFilterCrypto = myCryptoFeed.filter(coin => 
//   coin.name.toLowerCase().includes(search.toLowerCase())
// );


return (
  <div className ="app">
    <Header />
    <MainPage />
 

     {/* <div> */}
       {/* {searchFilterCrypto.map(coin => {
         return (
          <Search 
          // key = {coin.id}
          // name = {coin.name}
          // image = {coin.image}
          // symbol = {coin.symbol}
          // currentPrice = {coin.current_price}
          // handleChange={handleChange}
          />
       )
       })
       } */}
     {/* </div> */}
     

    </div>
  );
}

export default App;
  //get upcoming crpyto events

  // useEffect(()=> {
  //   fetch(`https://api.coingecko.com/api/v3/events`)
  //   .then(r => r.json())
  //   .then(data => console.log(data))
  // }, [])

