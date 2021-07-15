import {useState} from "react";
import Card from "./Card"
function CardContainer({coins, handleClick, sortCoins, sortBy}) {
    const [ search, setSearch ] = useState('')
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const searchFilterCrypto = coins.filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())
    ); 
    return (
    <div className="coin-container">
            <div className ="crypto-container">
            <form >
                <input onChange = {handleChange}
                 id="searchbox" type="text" placeholder="Search Crypto"/>
            </form>
            </div>
            <strong style = {{color: 'white'}}>Sort Name By:</strong>
            <label style = {{color: 'white'}}>
                <input
                type="radio"
                value="Ascending"
                name="sort"
                checked={sortBy === 'Ascending'}
                onChange={sortCoins}
                />
                🠕
            </label>
            <label style = {{color: 'white'}}>
                <input
                type="radio"
                value="Descending"
                name="sort"
                checked={sortBy === 'Descending'}
                onChange={sortCoins}
                />
                🠗
            </label>
            <div>
            <h1 style={{color: "white"}}>Cryptos</h1>
                {searchFilterCrypto.map(coin => {
                    return (
                    <Card
                    key = {coin.id}
                    id = {coin.id}
                    name = {coin.name}
                    image = {coin.image}
                    symbol = {coin.symbol}
                    price = {coin.current_price}
                    handleClick={handleClick}
                    coins={coin}
                    />
                )
                })
                }
            </div>  
    </div>
    )
}
export default CardContainer