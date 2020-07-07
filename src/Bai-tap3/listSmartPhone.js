import React from "react"
import SmartPhoneProduct from "./smartPhoneProduct"

export default function ListSmartPhone() {
    return (
        <div>
            <div id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
                <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    <SmartPhoneProduct />
                    <SmartPhoneProduct />
                    <SmartPhoneProduct />
                    <SmartPhoneProduct />
                </div>
            </div>
        </div>
    )
}