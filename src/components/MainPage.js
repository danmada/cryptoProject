import {useEffect, useState} from "react";
import CardContainer from "./CardContainer"
import Portfolio from "./Portfolio"
import SearchChange from "./SearchChange"

function MainPage() {
  //holds api data
  const [coins, setCoins ] = useState([])
  
  const [search, setSearch] = useState('')

  const [sortBy, setSortBy]= useState('')

  // Fetch Crypto Data 
  useEffect(()=> {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024hr%2C%207d%2C%2030d%2C%20200d%2C%201yr`)
    .then(r => r.json())
    .then(cryptoData => 
      setCoins(cryptoData)
    )
  }, [])

  useEffect(() => {
    if(sortBy === 'Ascending'){
      const sortedCoins = sortByName()
      setCoins(sortedCoins)
    }else{
      const sortedCoins = sortByDescending()
      setCoins(sortedCoins)
    }
  }, [sortBy])
  
  const sortCoins = (e) => {
    setSortBy(e.target.value)
  }

  const sortByName = () => {
    return [...coins].sort(function(a, b) {
      let cryptoOne = a.name.toUpperCase(); // ignore upper and lowercase
      let cryptoTwo = b.name.toUpperCase(); // ignore upper and lowercase
      if (cryptoOne < cryptoTwo) {
        return -1;
      }
      if (cryptoOne > cryptoTwo) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }
  const sortByDescending = () => {
    return [...coins].sort(function(a, b) {
      let cryptoOne = a.name.toUpperCase(); // ignore upper and lowercase
      let cryptoTwo = b.name.toUpperCase(); // ignore upper and lowercase
      if (cryptoOne > cryptoTwo) {
        return -1;
      }
      if (cryptoOne < cryptoTwo) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }

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
       <SearchChange sortCoins ={sortCoins} sortBy={sortBy}/>

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