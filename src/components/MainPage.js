import { Switch, Route } from "react-router-dom"
import {useEffect, useState} from "react";
import Search from "./Search"
import CardContainer from "./CardContainer"
import Portfolio from "./Portfolio"
import CardDetail from "./DetailsContainer";

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
    if(sortBy === 'Ascending'){
      const sortedCoins = sortByName()
      setCoins(sortedCoins)
    }else{
      const sortedCoins = sortByDescending()
      setCoins(sortedCoins)
    }
  }, [sortBy])


  function sortByName()  {
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

  function sortByDescending()  {
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

  const sortCoins = (e) => {
      setSortBy(e.target.value)
  }
  

  function addToPortfolio(coins) {
    if(!myPortfolio.includes(coins)) {
   const updatePortfolio = [...myPortfolio, coins]
   setMyPortfolio(updatePortfolio)
  }}


//buy sell coin functions for portfolio aspects?
  return (
    <div>
      <Switch>
          <Route path="/portfolio" component= {
            () => <Portfolio  coins = {coins} myPortfolio={myPortfolio}/>
          }>
          </Route>
          <Route path="/:id" component= {
            () => <CardDetail coins={coins}/>
          }>
          </Route>
          <Route path="/" component= {
          () => <CardContainer coins={coins} handleClick={addToPortfolio} sortCoins={sortCoins} sortBy={sortBy}/>
          }>
          </Route>
      </Switch>
      {/* <Search sortCoins={sortCoins} coins = {coins} sortBy={sortBy}/> */}
    </div>
     ) 
}

export default MainPage;