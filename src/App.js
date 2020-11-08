import React, {Component} from 'react';
import './App.css';
import {Editor} from "./components/Editor";
import {ProductTable} from "./components/ProductTable";
import {EditorUncontrolled} from "./components/EditorUncontrolled";
import {EditorCallback} from "./components/EditorCallback";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    addProduct = (product) => {
        if (!this.state.products.includes(product)) {
            this.setState({products: [...this.state.products, product]});
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Editor callback={this.addProduct}/>
                    </div>
                    <div className="col">
                        <EditorUncontrolled callback={this.addProduct}/>
                    </div>
                    <div className="col">
                        <EditorCallback callback={this.addProduct}/>
                    </div>
                </div>
                <div className="row">
                    <div class="col">
                        <h6 className="bg-secondary text-white m-2 p-2">Products</h6>
                        <div className="m-2">
                            {
                                this.state.products.length === 0
                                    ? <div className="text-center">No Products</div>
                                    : <ProductTable products={this.state.products}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

