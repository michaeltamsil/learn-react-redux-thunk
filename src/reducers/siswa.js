const initialState = {
    isShowAddSiswa: false,
    data: []
};

// 3 ini adalah function biasa
// dimana utk memegang data-data siswa
// jika action.typenya A . maka akan melakukan perintah sesuai dengan action.type nya
// setelah di return maka yang pakai mapStateToProps dimana "state.siswa" ada yang pakai maka akan melakukan pergantian tampilan
// karena data berubah
const siswa = (state = initialState, action) => {
    let newData;
    switch (action.type) {
        case 'SISWA_HAPUS':
            newData = state.data.filter( (item) => {
                if (item.id !== action.payload)
                    return true;
                return false;
            });
            return {...state, data : newData};

        case 'SISWA_LIST':
            return {...state, data : action.payload};

        case 'SISWA_TAMBAH':
            const data = action.payload;
            newData = [...state.data, data]
            return {...state, data : newData};
        
        case 'TAMPILKAN_TAMBAH_SISWA':
            return {...state, isShowAddSiswa: true };
        case 'SEMBUNYIKAN_TAMBAH_SISWA':
            return {...state, isShowAddSiswa: false };
        default:
            return state;
    }
}

export default siswa;