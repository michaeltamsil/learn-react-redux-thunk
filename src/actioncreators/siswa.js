import axios from 'axios';

//dispatch gunanya itu ke reducers ...
//biasanya nama objectnya adalah action ... jadi 

export const getSiswa = () => {
    return function(dispatch) {
        axios.get('http://localhost:3500/siswa')
        .then( (response) => {
            //console.log(response);
            // dispatch akan ke reducers dan ma
            dispatch({
                type: 'SISWA_LIST',
                payload: response.data
            })
        })   
    }
}

export const hapusSiswa = id => {
    console.log('hapus siswa');
    return function (dispatch) {
        console.log('hapus siswa di dispatch')
        axios.delete(`http://localhost:3500/siswa/${id}`)
        .then ( (response) => {
            console.log(response);
            dispatch({
                type: 'SISWA_HAPUS',
                payload: id
            })

        })
    }
}

export const tambahSiswa = data => {
    return (dispatch) => {
        axios.post ('http://localhost:3500/siswa', data)
        .then ( (response) => {
            
            dispatch({
                type: 'SEMBUNYIKAN_TAMBAH_SISWA'
            })
            dispatch({
                type: 'SISWA_TAMBAH',
                payload: response.data
            })

        })
    }
}