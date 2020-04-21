const initialState = [];

// 3 ini adalah function biasa
// dimana utk memegang data-data siswa
// jika action.typenya A . maka akan melakukan perintah sesuai dengan action.type nya
// setelah di return maka yang pakai mapStateToProps dimana "state.siswa" ada yang pakai maka akan melakukan pergantian tampilan
// karena data berubah
const siswa = (state = initialState, action) => {

    switch (action.type) {
        case 'SISWA_HAPUS':
            const newState = state.filter( (item) => {
                if (item.id !== action.payload)
                    return true;

                return false;
            });

            
            return newState;

        case 'SISWA_LIST':
            return action.payload;

        case 'SISWA_TAMBAH':
            return [...state, action.payload];
        
        default:
            return state;
    }
}

export default siswa;