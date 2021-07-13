import Card from "./Card"

function Portfolio({myPortfolio}) {

    return (
    <div className="coin-portfolio">
        <h1>My Portfolio</h1>
        <div>
            {myPortfolio.map(myCrypto => {
                return <Card 
                    key={myCrypto.id} 
                    name = {myCrypto.name}
                    image = {myCrypto.image}
                    symbol = {myCrypto.symbol}
                    price = {myCrypto.current_price}
                
                />} 
                ) }
                
         
        </div>
    </div>
    )

}


export default Portfolio