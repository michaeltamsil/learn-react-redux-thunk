const initialState = {
    data: [],
    isShowAdd: false
}

const guru = (state = initialState, action) => {
    switch (action.type) {
        case 'GURU_LIST':
            return {
                ...state,
                data: action.payload
            };
            
        case 'GURU_TAMBAH':
            // Object.assign({}, state, data: [...data, action.payload])
            const { data } = state;
            return {...state, data: [...data, action.payload]}
            // { 
            //     data: state.data, 
            //     isShowAdd: state.isShowAdd,
            // , data: [...data, action.payload]}
        
        case 'SEMBUNYIKAN_TAMBAH_GURU':
            return { ...state, isShowAdd: false}

        case 'TAMPILKAN_TAMBAH_GURU':
            return { ...state, isShowAdd: true}
        
        default:
            return state;
    }

}
export default guru;