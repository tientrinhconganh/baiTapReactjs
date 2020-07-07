import React from "react"
import LaptopProduct from "./laptopProduct"

export default function ListLaptop() {
    return (
        <div>
            <div id="laptop" className="container-fluid pt-5 pb-5 bg-light text-dark">
                <h1 className="text-center">BEST LAPTOP</h1>
                <div className="row">
                    <LaptopProduct />
                    <LaptopProduct />
                    <LaptopProduct />
                    <LaptopProduct />
                </div>
            </div>
        </div>
    )
}