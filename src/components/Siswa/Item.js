import React from 'react';
import { connect } from 'react-redux';

import { hapusSiswa } from './../../actioncreators/siswa';

const Item = (props) => {
    const { id, nama, kelas } = props.data

    const hapus = () => {
        props.hapusSiswa(id)
    }
    return (
        <tr>
            <td>{nama}</td>
            <td>{kelas}</td>
            <td><button onClick={hapus}>Hapus</button></td>
        </tr>
    )
}

const mapDispatchToProps = {
    hapusSiswa
}

// const connect = (state, dispatch){
//     return (Component) => {
//         //xxx
//     }
// }

export default connect(null, mapDispatchToProps)(Item);