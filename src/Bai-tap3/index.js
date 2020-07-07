import React from "react"
import Header from "./header"
import Carousel from "./carousel"
import ListSmartPhone from "./listSmartPhone"
import ListLaptop from "./listLaptop"
import Promotion from "./promotion"
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery.min.js"
import "popper.js/dist/umd/popper.min.js"
import "bootstrap/dist/js/bootstrap.min.js"

export default function Baitap3(){
    return(
        <div>
<Header/>
<Carousel/>
<ListSmartPhone/>
<ListLaptop/>
<Promotion/>
        </div>
    )
}