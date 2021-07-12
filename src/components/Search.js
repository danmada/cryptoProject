function Search ({name, image, currentPrice, symbol}){
    

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

return (
    <>
    <div>
        <img src={image} alt='crypto'/>
        <h1>{name}</h1>
        <h1>Symbol: {symbol}</h1>
        <h1>Price: {formatter.format(currentPrice)}</h1>
    </div>
    </>
)
}
export default Search