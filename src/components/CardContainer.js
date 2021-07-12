import react, { useState } from "react";
import Card from "./Card"
import Search from "./Search";

function CardContainer({myCryptoFeed, handleClick}) {
  

    return (
    <div>
        <h1>Crypto Container</h1>
        <div>
            {myCryptoFeed.map(myCrypto => {
                return <Card key={myCrypto.id} myCrypto={myCrypto} handleClick={handleClick} />
                            
                            
            }) }
        </div>
    </div>
    )

   
}

export default CardContainer