import {useEffect, useState} from "react";
import Search from "./Search"
import CardContainer from "./CardContainer"
import Portfolio from "./Portfolio"

function MainPage() {
  //holds api data
  const [ coins, setCoins ] = useState([])
  const [search, setSearch] = useState('')

  const [ sortBy, setSortBy ] = useState('')

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
  useEffect(() => {
    if(sortBy === 'Alphabetically'){
      const sortedCoins = sortByName()
      setCoins(sortedCoins)
    }else{
      const sortedCoins = sortByPrice()
      setCoins(sortedCoins)
    }
  }, [sortBy])



  const sortCoins = (e) => {
    setSortBy(e.target.value)
  }

  // const filterCoins = (e) => {
  //   setFilterBy(e.target.value)
  // }

  function sortByName()  {
    return [...coins].sort(function(a, b) {
      let nameA = a.name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }

  function sortByPrice () {
    return [...coins].sort(function (a, b) {
      return a.current_price_ - b.current_price;
    });
  }

//buy sell coin functions for portfolio aspects?
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
      <Search sortCoins={sortCoins} coins = {coins} sortBy={sortBy}/>

      <CardContainer coins={coins}  />

      <Portfolio  coins = {coins} />
    </div>
  );
}

export default MainPage;