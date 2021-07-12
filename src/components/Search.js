import {useState} from "react";

function Search ({sortmyCryptoFeed, sortBy, name, image, currentPrice, symbol}){
      //update search usestate so we can filter
  const [search, setSearch] = useState('')
  
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

return (
    
    <>
    <div>
        <img src={image} alt='crypto'/>
        <h1>{name}</h1>
        <h1>Symbol: {symbol}</h1>
        <h1>Price: {formatter.format(currentPrice)}</h1>
    </div>
    </>
)
}
export default Search