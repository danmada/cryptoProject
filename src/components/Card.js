function Card({name , image, symbol, price}) {
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      
    return (
    <div>
        <img src={image} alt='crypto'/>
        <h1>{name}</h1>
        <h1>Symbol: {symbol}</h1>
        <h1>Price: {formatter.format(price)}</h1>
        <button>Add To Portfolio</button>
        
    </div>
    )
}

export default Card