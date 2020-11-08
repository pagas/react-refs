import React, {Component} from 'react';

export class EditorCallback extends Component {
    constructor(props) {
        super(props);
        this.formElements = {
            name: {label: "Name", name: "name"},
            category: {label: "Category", name: "category"},
            price: {label: "Price", name: "price"}
        }
    }

    setElement = (element) => {
        if (element !== null) {
            this.formElements[element.name].element = element;
        }
    }

    handleAdd = () => {
        let data = {};
        Object.values(this.formElements)
            .forEach(record => {
                data[record.element.name] = record.element.value;
                record.element.value = "";
            })

        this.props.callback(data);
        this.formElements.name.element.focus();
    }

    render() {
        return <React.Fragment>
            <h6 className="bg-secondary text-white m-2 p-2">Callback function</h6>
            {
                Object.values(this.formElements).map(record =>
                    <div className="form-group p-2">
                        <label>{record.label}</label>
                        <input className="form-control"
                               name={record.name}

                               autoFocus={record.name === "name"}
                               ref={this.setElement}
                        />
                    </div>
                )
            }
            <div className="text-center">
                <button className="btn btn-primary" onClick={this.handleAdd}>
                    Add
                </button>
            </div>
        </React.Fragment>
    }
}
