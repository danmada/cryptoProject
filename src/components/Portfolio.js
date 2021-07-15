import Card from "./Card"
import { useParams } from "react-router-dom"


function Portfolio({myPortfolio, deleteFromPort}) {

    const paramsPort = useParams()

    console.log(paramsPort)

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