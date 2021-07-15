import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import DetailsCard from "./DetailsCard";


function DetailsContainer ({handleClick}) {
    const [coinDetail, setCoinDetail] = useState([])
    const params = useParams()

    

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${params.id}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024hr%2C%207d%2C%2030d%2C%20200d%2C%201yr`)
            .then(r => r.json())
            .then(data => setCoinDetail(data))
    }, [params.id])

    

    return (
        <div>
        <div>
            {coinDetail.map(details =>
                <DetailsCard key={details.id} details={details} handleClick={handleClick}/>)}
        </div>
        </div>
    )


}


export default DetailsContainer