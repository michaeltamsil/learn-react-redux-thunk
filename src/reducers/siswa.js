const initialState = [];


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