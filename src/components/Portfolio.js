import Card from "./Card"

function Portfolio({myPortfolio}) {

    return (
    <div>
        <h1>My Portfolio</h1>
        <div>
         {myPortfolio.map(myCrypto => {
                return <Card key={myCrypto.id} myCrypto={myCrypto} />

            }) }
        </div>
    </div>
    )

}


export default Portfolio