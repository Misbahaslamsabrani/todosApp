import React from 'react';
const ShowItems = (props) => {
        const { allItems, edititem, delitem} = props;

        return <tbody>
            {allItems.map((arr, index) => {
                return (<tr key={index} className="table-info">
                    <td>{index+1}.</td>
                    <td>{arr}</td>
                    <td className="buttons"> 
                    <button className="btn btn-light" onClick={() => {edititem(index) }}>
                    Edit</button> &nbsp;
                    <button className="btn btn-light" onClick={() => {delitem(index)}}>
                    Done</button>
                    </td>
                    </tr>)
            })}

        </tbody>
    }
export default ShowItems;
