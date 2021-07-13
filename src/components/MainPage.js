import {useEffect, useState} from "react";
import CardContainer from "./CardContainer"
import Portfolio from "./Portfolio"

function MainPage() {
  //holds api data
  const [coins, setCoins ] = useState([])
  const [search, setSearch] = useState('')

  // Fetch Crypto Data 
  useEffect(()=> {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024hr%2C%207d%2C%2030d%2C%20200d%2C%201yr`)
    .then(r => r.json())
    .then(cryptoData => 
      setCoins(cryptoData)
    )
  }, [])
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const searchFilterCrypto = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
); 


  return (
    <div>
       <form>
          <input onChange = {handleChange}
          type="text" placeholder="Search Crypto"/>
       </form>
       {searchFilterCrypto.map(coin => {
         return (
          <CardContainer
          key = {coin.id}
          name = {coin.name}
          image = {coin.image}
          symbol = {coin.symbol}
          price = {coin.current_price}
          />
       )
       })
       }

      <CardContainer coins={coins}  />

      <Portfolio  coins = {coins} />
    </div>
  );
}

export default MainPage;