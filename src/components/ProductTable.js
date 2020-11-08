import React, {Component} from 'react';

export class ProductTable extends Component {

    render() {
        return <table className="table table-sm table-striped">
            <thead>
            <tr>
                <td>Name</td>
                <td>Category</td>
                <td>Price</td>
            </tr>
            </thead>
            <tbody>
            {
                this.props.products.map((product, index) =>
                    <tr key={index}>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>${Number(product.price).toFixed(2)}</td>
                    </tr>
                )
            }
            </tbody>
        </table>
    }
}
