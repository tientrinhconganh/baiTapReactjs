import React from "react"
import Itemcard from "./itemsCard"

export default function Carousel(){
return(
    <div className="container">
        <div className="row">
        <Itemcard/>
        <Itemcard/>
        <Itemcard/>
    </div>
    </div>
);
}