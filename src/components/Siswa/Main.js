import React, { useEffect } from 'react';

import { connect } from 'react-redux';

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
            <table border="1">
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
            </table>
        </div>
    )
}


const mapStateToProps = (state) => {
    console.log(state.siswa);
    return {
        data : state.siswa.data
    }
}

const mapDispatchToProps = {
    getSiswa
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);