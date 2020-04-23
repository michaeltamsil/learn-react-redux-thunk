import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getData, tampilkanTambah } from './../../actioncreators/guru'

import Add from './Add';
import Edit from './Edit';
import Item from './Item';

const Main = (props) => {

    const handleClick = () => {
        props.tampilkanTambah()
    }

    useEffect(() => {
        props.getData()
    }, [])

    return (
        <div>
            <button onClick={handleClick}>Tambah</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Bidang Studi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((item) => {
                            return (<Item key={item.id} data={item}/>)
                        })
                    }
                </tbody>
            </table>
            <Add/>
            <Edit/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.guru.data
    }
    
}
const mapDispatchToProps = { getData, tampilkanTambah }

export default connect(mapStateToProps, mapDispatchToProps)(Main);