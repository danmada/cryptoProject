import Card from "./Card"

function CardContainer({key, name, image, price}) {
  

    return (
    <div>
        <h1>Crypto Container</h1>
        <div>
            <Card name = {name} image = {image} price ={price}/>
        </div>
    </div>
    )

   
}

export default CardContainer