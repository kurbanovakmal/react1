import React, { Component } from "react";

import './Item-add.css'


export default class ItemAdd extends Component {

    state = {
        label: ''
    }



    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault()
        
        this.setState({
            label: ''
        })
        if (this.state.label != '') {
            this.props.onAdded(this.state.label)
        }
        else {
            alert("Введите заданию")
        }
    }
    
    render(){
        return (
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                <input type="text" className="form-control" placeholder="what needs to be done"
                onChange={ this.onLabelChange } 
                value={ this.state.label }/>
                <button className="btn btn-light"
                >AddItem</button>
            </form>
        )
    }
}

