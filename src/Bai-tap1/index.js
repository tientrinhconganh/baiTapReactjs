import React, { Component } from "react";
import Header from "./header"
import Content from "./content"
import Sidebar from "./sidebar"
import Footer from "./footer"

export default class BaiTap1 extends Component {
    render() {
        return (
            <div>
                <Header />
               <div className="contents">
               <Content />
                <Sidebar />
               </div>
                <Footer />
            </div>
        );
    }
}

// export default BaiTap1;
//k nằm ngang hàng ngang cấp ở ngoài
//jsx: js có thêm html