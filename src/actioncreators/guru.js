import axios from "axios"

export const getData = () => {
    return (dispatch) => {
        axios.get('http://localhost:3500/guru')
        .then(response => {
            dispatch({
                type: "GURU_LIST",
                payload: response.data
            })
        })

    }
}
export const tampilkanTambah = () => {
    return (dispatch) => {
        dispatch({
            type: 'TAMPILKAN_TAMBAH_GURU'
        })
    }
}

export const sembunyikanTambah = () => {
    return (dispatch) => {
        dispatch({
            type: 'SEMBUNYIKAN_TAMBAH_GURU'
        })
    }
}

export const simpan = (data) =>{
    return dispatch =>{
        axios.post('http://localhost:3500/guru',data)
        .then(response => {
            dispatch({
                type: 'SEMBUNYIKAN_TAMBAH_GURU'
            })
            dispatch({
                type: 'GURU_TAMBAH',
                payload: response.data
            })
        })
    }
}