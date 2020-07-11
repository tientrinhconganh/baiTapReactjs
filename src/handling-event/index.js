import React, { Component } from 'react'

export default class HandlingEvent extends Component {

    handleOnClick = () => {
console.log("handleOnClick")
    }
handleParamsOnClick=(name,age)=>{
    console.log("Hello "+name+ " Tuoi: "+age)
}

    render() {
        return (
            <div>
                <h3 className="title">HandlingEvent</h3>
                <button className="btn btn-success" onClick={this.handleOnClick}>HandlingEvent</button>
                <button className="btn btn-info" onClick={()=>{this.handleParamsOnClick("Tien","18")}}>handleOnClick Params</button>
            </div>
        )
    }
}
