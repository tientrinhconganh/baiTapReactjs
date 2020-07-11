import React, { Component } from 'react'
import data from "./data.json"

export default class BaitapList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listMovie: data,
        };
    }
    renderT = () => {
        const { listMovie } = this.state;
        return listMovie.map(movie => {
            return (<div className="col-4" key={movie.maPhim}>
                <div className="card" >
                    <img src={movie.hinhAnh} className="img-fluit " alt="movie" style={{ height: 400 }} />
                    <div className="card-body ">
                        <h5>{movie.tenPhim}</h5>
                        <p className="Btl_text" >{movie.moTa}</p>
                    </div>
                </div>
            </div>)
        })
    }
    render() {
        console.log(this.state.listMovie)
        return (
            <div>
                <h3 className="title">BaitapList</h3>
                <div className="container">
                    <div className="row">
                        {this.renderT()}
                    </div>
                </div>
            </div>
        )
    }
}
