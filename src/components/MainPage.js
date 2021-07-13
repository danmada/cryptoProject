import { Switch, Route } from "react-router-dom"
import {useEffect, useState} from "react";
import Search from "./Search"
import CardContainer from "./CardContainer"
import Portfolio from "./Portfolio"

function MainPage() {
  //holds api data
  const [ coins, setCoins ] = useState([])
  // const [search, setSearch] = useState('')

  const [myPortfolio, setMyPortfolio] = useState([])
  const [ sortBy, setSortBy ] = useState('')

  

  // Fetch Crypto Data 
  useEffect(()=> {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024hr%2C%207d%2C%2030d%2C%20200d%2C%201yr`)
    .then(r => r.json())
    .then(cryptoData => 
      setCoins(cryptoData)
    )
  }, [])

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

  function addToPortfolio(coins) {
    if(!myPortfolio.includes(coins)) {
   const updatePortfolio = [...myPortfolio, coins]
   setMyPortfolio(updatePortfolio)

  }}

  useEffect(() => {
    if(sortBy === 'Alphabetically'){
      const sortedCoins = sortByName()
      setCoins(sortedCoins)
    }else{
      const sortedCoins = sortByPrice()
      setCoins(sortedCoins)
    }
  }, [sortBy])



 

//buy sell coin functions for portfolio aspects?
      


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
      <Switch>
          <Route path="/portfolio" component= {
            () => <Portfolio  coins = {coins} myPortfolio={myPortfolio}/>
          }>
          </Route>
          <Route path="/" component= {
          () => <CardContainer coins={coins} handleClick={addToPortfolio}/>
          }>
          </Route>
      </Switch>
      <Search sortCoins={sortCoins} coins = {coins} sortBy={sortBy}/>
    </div>
     ) 
}

export default MainPage;