import React from "react"
import Header from "./header"
import Carousel from "./carousel"
import Whatwedo from "./WhatWeDo"
import Contact from "./contact"
import Listcard from "./ListCard"
import Footer from "./footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery.min.js"
import "popper.js/dist/umd/popper.min.js"
import "bootstrap/dist/js/bootstrap.min.js"

export default function Baitap2() {
    return (
        <div>
            <Header />
            <Carousel />
            <div className="container">
            <div className="row">
                <Whatwedo />
                <Contact />
            </div>
            </div>
            <Listcard />
            <Footer />
        </div>
    );
}
//tắt mở lại: ctri c