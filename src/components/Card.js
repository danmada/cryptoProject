import { Link } from "react-router-dom"

function Card({id, name , image, symbol, price, coins, handleClick, deleteFromPort}) {
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    
    
    return (
    
    <div className="coin-card">
        <img src={image} alt='crypto'/>
        <h1>{name}
            <small>{symbol}</small>
            <span style={{fontSize:"11pt"}}>Price: {formatter.format(price)}</span>
        </h1>
        <button onClick={() => handleClick(coins)}>Add to Portfolio</button>
        
        {/* <span>Price: {formatter.format(price)}</span> */}
        <Link to={`/${id}`}>More Detail</Link>

        
    </div>
    
    )
}

export default Card