import React from 'react';

const Item = (props) => {
    const { nama, jurusan } = props.data
    return (
        <tr>
            <td>{nama}</td>
            <td>{jurusan}</td>
        </tr>
    )
}

export default Item;