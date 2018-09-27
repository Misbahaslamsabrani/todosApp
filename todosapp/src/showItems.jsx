import React from 'react';
const ShowItems = (props) => {
        const { allItems, edititem, delitem} = props;

        return <tbody>
            {allItems.map((arr, index) => {
                return (<tr key={index}>
                    <td>{index+1}.</td>
                    <td className="bigtext">{arr}</td>
                    <td>
                    <button className="btn btn-success" onClick={() => {edititem(index) }}>
                    Edit</button>
                    </td>
                    <td>
                    <button className="btn btn-light" onClick={() => {delitem(index)}}>
                    Done</button>
                    </td>
                    </tr>)
            })}

        </tbody>
    }
export default ShowItems;
