import React, { Component } from 'react'

export default class ListKey extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listProduct: [
                { id: 1, name: "Iphone X", price: 123456 },
                { id: 2, name: "Samsung", price: 123456 },
                { id: 3, name: "HTC", price: 123456 },
                { id: 4, name: "Nokia", price: 123456 },
            ]
        }
    };

    renderTable = () => {
        // boc tach
        const { listProduct } = this.state;
        return listProduct.map(product => {
            return (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            )
        });
    };

    render() {
        return (
            <div>
                <h3 className="title">*ListKey</h3>
                <table className="table">
                    <thead>
                        <tr >
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
