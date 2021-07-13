function Card({myCrypto, handleClick}) {
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      
    return (
    <div className="coin-card" onClick={() => handleClick(myCrypto)}>
        <img src={myCrypto.image} alt='crypto'/>
        <h1>{myCrypto.name}</h1>
        <h1>Symbol: {myCrypto.symbol}</h1>
        <h1>Price: {formatter.format(myCrypto.current_price)}</h1>
    </div>
    )
}

export default Card