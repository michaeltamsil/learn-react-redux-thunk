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
    let newState = {}
    switch (action.type) {
        case 'SISWA_HAPUS':
            const newData = state.data.filter( (item) => {
                if (item.id !== action.payload)
                    return true;
                return false;
            });

            newState = {...state, data : newData};

            return newState;

        case 'SISWA_LIST':
            newState = {...state, data : action.payload}
            return newState;

        case 'SISWA_TAMBAH':
            return [...state, action.payload];
        
        case 'TAMPILKAN_TAMBAH_SISWA':
            return {...state, isShowAddSiswa: true };
        case 'SEMBUNYIKAN_TAMBAH_SISWA':
            return {...state, isShowAddSiswa: false };
        default:
            return state;
    }
}

export default siswa;