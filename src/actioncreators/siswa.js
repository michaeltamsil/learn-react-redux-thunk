import axios from 'axios';

export const getSiswa = () => {
    return function(dispatch) {
        axios.get('http://localhost:3500/siswa')
        .then( (response) => {
            //console.log(response);
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