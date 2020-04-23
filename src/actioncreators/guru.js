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

export const tampilkanEdit = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'TAMPILKAN_EDIT_GURU',
            payload: data
        })
    }
}

export const sembunyikanEdit = () => {
    return (dispatch) => {
        dispatch({
            type: 'SEMBUNYIKAN_EDIT_GURU'
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

export const simpanEdit = (data) =>{
    return dispatch =>{
        axios.put(`http://localhost:3500/guru/${data.id}`,data)
        .then(response => {
            dispatch({
                type: 'SEMBUNYIKAN_EDIT_GURU'
            })
            dispatch({
                type: 'GURU_UPDATED',
                payload: response.data
            })
        })
    }
}