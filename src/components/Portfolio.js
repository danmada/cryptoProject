import Card from "./Card"

function Portfolio({myPortfolio, deleteFromPort}) {

    return (
    <div className="coin-portfolio">
        <h1 className ="crypto-container">My Portfolio</h1>
        <div>
            {myPortfolio.map(myCrypto => {
                return <Card 
                    key={myCrypto.id} 
                    name = {myCrypto.name}
                    image = {myCrypto.image}
                    symbol = {myCrypto.symbol}
                    price = {myCrypto.current_price}
                    id = {myCrypto.id}
                    deleteFromPort={deleteFromPort}
                
                />} 
                ) }
                
    
        </div>
    </div>
    )

}


export default Portfolio