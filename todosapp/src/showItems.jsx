import React, { Component } from 'react';
class ShowItems extends Component {
    render() {
        return <tr>
            <td>{this.props.num}.</td>
            <td className="bigtext">{this.props.text}</td><td>
                <button className="btn btn-success" onClick={() => { this.props.editItem(this.props.id) }}>Edit</button></td><td>
                <button className="btn btn-light" onClick={() => { this.props.delItem(this.props.id) }}>Done</button></td>
                </tr>
    }
}
export default ShowItems;