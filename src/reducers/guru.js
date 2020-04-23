const initialState = {
    data: [],
    editData: {},
    isShowAdd: false,
    isShowEdit: false
}

const guru = (state = initialState, action) => {
    let data = []
    switch (action.type) {
        
        case 'GURU_LIST':
            return {
                ...state,
                data: action.payload
            };
            
        case 'GURU_TAMBAH':
            // Object.assign({}, state, data: [...data, action.payload])
            
            data = state.data;
            return {...state, data: [...data, action.payload]}
            // { 
            //     data: state.data, 
            //     isShowAdd: state.isShowAdd,
            // , data: [...data, action.payload]}
        case 'GURU_UPDATED':
            
            data = state.data;
            const newItem = action.payload;

            const newData = data.map((item) => {
                if (item.id === newItem.id)
                    return newItem;
                return item;
            })
            return { ...state, data: newData};

            

        
        case 'SEMBUNYIKAN_EDIT_GURU':
            return { ...state, isShowEdit: false}

        case 'SEMBUNYIKAN_TAMBAH_GURU':
            return { ...state, isShowAdd: false}

        case 'TAMPILKAN_EDIT_GURU':
            return { ...state, editData: action.payload, isShowEdit: true}

        case 'TAMPILKAN_TAMBAH_GURU':
            return { ...state, isShowAdd: true}
        
        
        default:
            return state;
    }

}
export default guru;