import Search from "./Search";
import {useEffect, useState} from "react";

function App() {
  //holds api data
  const [myCryptoFeed, setMyCryptoFeed] = useState([])
  //update search usestate so we can filter
  const [search, setSearch] = useState('')

  const [ sortBy, setSortBy ] = useState('')

  // Fetch Crypto Data 
  useEffect(()=> {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024hr%2C%207d%2C%2030d%2C%20200d%2C%201yr`)
    .then(r => r.json())
    .then(cryptoData => setMyCryptoFeed(cryptoData))
  }, [])

  useEffect(() => {
    if(sortBy === 'Ascending'){
      const sortedmyCryptoFeed = sortByName()
      setMyCryptoFeed(sortedmyCryptoFeed)
    }
    // elseif(sortBy ==='HighestPriceFirst'){
    //   const sortedmyCryptoFeed = sortByPrice()
    //   setMyCryptoFeed(sortedmyCryptoFeed)
    // }
    else{
      const sortedmyCryptoFeed = sortByNameDescending()
      setMyCryptoFeed(sortedmyCryptoFeed)
    }
  }, [sortBy])
  
  const sortByName = () => {
    return [...myCryptoFeed].sort(function(a, b) {
      let cryptoOne = a.name.toUpperCase(); 
      let cryptoTwo = b.name.toUpperCase(); 
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

  const sortByNameDescending = () => {
    return [...myCryptoFeed].sort(function(a, b) {
      let cryptoOne = a.name.toUpperCase(); 
      let cryptoTwo = b.name.toUpperCase(); 
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
  const sortByPrice = () => {
    return [...myCryptoFeed].sort(function (a, b) {
      return a.current_price - b.current_price;
    });
  }
  const sortByPriceDescending = () => {
    return [...myCryptoFeed].sort(function (a, b) {
      return b.current_price - a.current_price 
    });
  }

  const sortmyCryptoFeed = (e) => {
    setSortBy(e.target.value)
  }
  
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
      <strong>Sort Coin Name:</strong>
      <label>
        <input
          type="button"
          value="Ascending"
          name="sort"
          checked={ sortBy === 'Ascending' }
          onClick={sortmyCryptoFeed}
        />
        {}
      </label>
      <label>
        <input
          type="button"
          value="Descending"
          name="sort"
          checked={sortBy === 'Price'}
          onClick={sortmyCryptoFeed}
        />
      </label>
      <label>
      <input
          type="button"
          value="HighestPriceFirst"
          name="sort"
          checked={ sortBy === 'HghestPriceFirst' }
          onClick={sortmyCryptoFeed}
        />
        </label>
  </div>
     <div>
       {searchFilterCrypto.map(coin => {
         return (
           
          <Search 
          sortmyCryptoFeed={sortmyCryptoFeed}
          sortBy={sortBy}

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

