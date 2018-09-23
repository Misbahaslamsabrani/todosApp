import React, { Component } from 'react';
class AddButton extends Component{
    render(){
        return <button className={this.props.className} >{this.props.text}</button>
    }
}
export default AddButton;