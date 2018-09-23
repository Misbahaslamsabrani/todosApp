import React, { Component } from 'react';

class InputField extends Component{
    render(){
        return <input type={this.props.type} name={this.props.name} id={this.props.id} value={this.props.value} onChange={this.props.whenChange}/>
    }
}

export default InputField;