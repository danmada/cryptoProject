import react, {useEffect, useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";

import CardContainer from "./CardContainer"
import Portfolio from "./Portfolio"
import Search from "./Search";


function MainPage () {
  //holds api data
  const [myCryptoFeed, setMyCryptoFeed] = useState([])
  const [myPortfolio, setMyPortfolio] = useState([])
  //update search usestate so we can filter
  const [search, setSearch] = useState('')

  // Fetch Crypto Data 
  useEffect(()=> {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024hr%2C%207d%2C%2030d%2C%20200d%2C%201yr`)
    .then(r => r.json())
    .then(cryptoData => setMyCryptoFeed(cryptoData))
  }, [])

  const handleChange = (e) => {
        
    setSearch(e.target.value)
  }

  const searchFilterCrypto = myCryptoFeed.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
); 

  function addToPortfolio(myCrypto) {
    if(!myPortfolio.includes(myCrypto)) {
   const updatePortfolio = [...myPortfolio, myCrypto]
   setMyPortfolio(updatePortfolio)
  }
}


    return (
        <div>
        
        <Search handleChange={handleChange}/>
        
         {/* <Router path="profolio/" component={
        () =>  <Portfolio myPortfolio={myPortfolio} />}
        /> */}
        
        <Portfolio myPortfolio={myPortfolio} />
        
        <CardContainer myCryptoFeed={myCryptoFeed} handleClick={addToPortfolio}/>
        </div>
    )

}

export default MainPage