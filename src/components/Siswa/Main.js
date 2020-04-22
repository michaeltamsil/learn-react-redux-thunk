import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import Item from './Item'
import { getSiswa } from './../../actioncreators/siswa'

const Main = (props) => {
    const { data } = props;

    useEffect(() => {
        if (data && !data.length){
            props.getSiswa()
        }
    }, [])

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Kelas</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) =>{
                            return (
                            <Item key={item.id} data={item} />
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}


const mapStateToProps = (state) => {

    return {
        data : state.siswa.data
    }
}

const mapDispatchToProps = {
    getSiswa
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);