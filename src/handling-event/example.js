import React, { Component } from 'react'

export default class ExampleHandlingEvent extends Component {

    isLogin = false;
    username = "tien"

    // renderHTML = () => {

    //     if (this.isLogin) {
    //         return (
    //             <div>
    //                 <p>Hello {this.username}</p>
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <div>
    //                 <button className="btn btn-success">Login</button>
    //             </div>
    //         )
    //     }
    // }

    doiIsLogin=()=>{
        // console.log("doiIsLogin")
        this.setState({
            isLogin: true
        })
    }

    renderHTML = () => {
        return this.isLogin ? (<p>Hello {this.username}</p>) : (<button className="btn btn-success" onClick={this.doiIsLogin}>Login</button>)
    }

    render() {
// console.log("render");
        return (
            <div>
                <h3 className="title">ExampleHandlingEvent</h3>
                {this.renderHTML()}
            </div>
        )
    }
}
