import React from 'react';

import { connect } from 'react-redux';
import { tampilkanEdit } from './../../actioncreators/guru'

const Item = (props) => {
    const { nama, jurusan } = props.data

    const handleClick = (event) => {
        props.tampilkanEdit(props.data)
    }
    return (
        <tr>
            <td>{nama}</td>
            <td>{jurusan}</td>
            <td>
                <button className="btn btn-warning" onClick={handleClick}>Edit</button>
            </td>
        </tr>
    )
}

const mapDispatchToProps = {
    tampilkanEdit
}

export default connect(null, mapDispatchToProps)(Item);