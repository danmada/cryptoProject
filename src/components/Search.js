import React from "react";
import Card from "./Card";

function Search ({handleChange, myCryptoFeed}){


    

return (
    <>
    <div>
    <form>
        <input onChange = {handleChange}
        type="text" placeholder="Search Crypto"/>
    </form> 
        <div>
            
        </div>
    </div>
    </>
)
}
export default Search