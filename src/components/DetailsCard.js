

function DetailsCard({details}) {

console.log(details)

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

return (
<div>
    <aside id="details-header">
        <img src={details.image} alt={details.id}/>
        <h1>{details.name}
        <small>{details.symbol}</small>
        </h1>
        
    </aside>
    <div id="coin-stats">
        <h3>{details.name} Stats</h3>
        <p>Current Price: {formatter.format(details.current_price)}</p>
        <p>24h Price Change: {formatter.format(details.price_change_24h)}</p>
        <p>Market Cap Rank: {details.market_cap_rank}</p>
        <p>Market Cap: {formatter.format(details.market_cap)}</p>
        <p>Circulating Supply: {details.circulating_supply} {details.symbol}</p>
        <p>Total Supply: {details.total_supply} {details.symbol}</p>
    </div>


</div>
)


}

export default DetailsCard