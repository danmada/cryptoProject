function Card({name , image, symbol, price, coins, handleClick}) {
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    
    
    return (
    
    <div onClick={() => handleClick(coins)} className="coin-card">
        <img src={image} alt='crypto' />
        <h1>{name}</h1>
        <span>Symbol: {symbol}</span>
        <span>Price: {formatter.format(price)}</span>
    </div>
    
    )
}

export default Card