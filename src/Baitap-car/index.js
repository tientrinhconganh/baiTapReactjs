import React, { Component } from 'react'

export default class BaiTapCar extends Component {
    constructor(props){
        super(props);

        this.state={
            img: "./img/imgRedCar.jpg"
        }
    }
    hadleImg=(color)=>{
        let img="";
switch(color){
    case "red":
        img="./img/imgRedCar.jpg"
        break;
    case "sliver":
        img="./img/imgSilverCar.jpg"
        break;
    default:
        img="./img/imgBlackCar.jpg"
        break;
}

this.setState({
    img
})
    }
    render() {
        console.log(this.state.img);
        
        return (
            <div className="container">
                <h3 className="title">* Bai tap car</h3>
                <div className="row">
                    <div className="col-6">
                        <img src={this.state.img} alt="" className="img-fluid" />
                    </div>
                    <div className="col-6">
                        <button className="btn btn-danger m-2" onClick={()=>{this.hadleImg("red")}}>Red</button>
                        <button className="btn btn-light m-2" onClick={()=>{this.hadleImg("sliver")}}>Sliver</button>
                        <button className="btn btn-dark m-2" onClick={()=>{this.hadleImg("black")}}>Black</button>
                    </div>
                </div>
            </div>
        )
    }
}
