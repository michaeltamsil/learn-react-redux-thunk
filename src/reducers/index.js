import { combineReducers } from 'redux';

import aplikasi from './aplikasi';
import siswa from './siswa';

// state.siswa = siswa
export default combineReducers({
    aplikasi,
    siswa
})
