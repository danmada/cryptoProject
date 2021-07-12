import Search from "./Search";

import {useEffect, useState} from "react";

function App() {
  //holds api data
  const [myCryptoFeed, setMyCryptoFeed] = useState([])
  //update search usestate so we can filter
  const [search, setSearch] = useState('')

  // Fetch Crypto Data 
  useEffect(()=> {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024hr%2C%207d%2C%2030d%2C%20200d%2C%201yr`)
    .then(r => r.json())
    .then(cryptoData => setMyCryptoFeed(cryptoData))
  }, [])

   console.log(myCryptoFeed)
const handleChange = (e) => {
  setSearch(e.target.value)
}
//core code to update crypto list against search value using (e.target.value) on input box
const searchFilterCrypto = myCryptoFeed.filter(coin => 
  coin.name.toLowerCase().includes(search.toLowerCase())
);


return (
  <div className ="app">
    <form>
        <input onChange = {handleChange}
        type="text" placeholder="Search Crypto"/>
    </form>

     <div>
       {searchFilterCrypto.map(coin => {
         return (
          <Search 
          key = {coin.id}
          name = {coin.name}
          image = {coin.image}
          symbol = {coin.symbol}
          currentPrice = {coin.current_price}
          />
       )
       })
       }
     </div>

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

