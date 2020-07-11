import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: false,
            username: "Tien"
        }
        // console.log("constructor")
    }

    doiIsLogin = () => {
       this.setState({
           isLogin: true
       })
    }

    renderHTML = () => {
        return this.state.isLogin ? (<p>Hello {this.state.username}</p>) : (<button className="btn btn-success" onClick={this.doiIsLogin}>Login</button>)
    }

    render() {
        // console.log("render")
        return (
            <div>
                <h3 className="title">* State</h3>
                {this.renderHTML()}
            </div>
        )
    }
}
// khi state thay doi thi ham render chay lai