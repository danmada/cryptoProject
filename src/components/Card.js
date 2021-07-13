function Card({name , image, symbol, price, coins, handleClick}) {
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      
      
    return (
    
    <div onClick={() => handleClick(coins)} className="coin-card">
        <img src={image} alt='crypto' />
        <h1>{name}</h1>
        <h2>Symbol: {symbol}</h2>
        <h2>Price: {formatter.format(price)}</h2>
    </div>
    
    )
}

export default Card