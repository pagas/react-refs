import React, {Component} from 'react';

export class EditorUncontrolled extends Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.categoryRef = React.createRef();
        this.priceRef = React.createRef();
    }

    handleAdd = () => {
        this.props.callback({
            name: this.nameRef.current.value,
            category: this.categoryRef.current.value,
            price: this.priceRef.current.value
        });
        this.nameRef.current.value = "";
        this.categoryRef.current.value = "";
        this.priceRef.current.value = "";
        this.nameRef.current.focus();
    }

    render() {
        return <React.Fragment>
            <h6 className="bg-secondary text-white m-2 p-2">Uncontrolled</h6>
            <div className="form-group p-2">
                <label>Name</label>
                <input className="form-control"
                       name="name"
                       onChange={this.handleChange}

                       autoFocus={true}
                       ref={this.nameRef}
                />
            </div>
            <div className="form-group p-2">
                <label>Category</label>
                <input className="form-control"
                       name="category"
                       onChange={this.handleChange}
                       ref={this.categoryRef}
                />
            </div>
            <div className="form-group p-2">
                <label>Price</label>
                <input className="form-control"
                       name="price"
                       onChange={this.handleChange}
                       ref={this.priceRef}
                />
            </div>
            <div className="text-center">
                <button className="btn btn-primary" onClick={this.handleAdd}>
                    Add
                </button>
            </div>
        </React.Fragment>
    }
}
