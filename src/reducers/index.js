import { combineReducers } from 'redux';

//import aplikasi from './aplikasi';
import guru from './guru';
import siswa from './siswa';

// state.siswa = siswa

//2. combineReducers ini gunanya utk menjadikan satu dari semua reducers.
// kalau jadi satu maka akan dibuat dalam bentuk object, maka parameter
// combineReducersnya juga object
// 3. ke siswa
export default combineReducers({
    guru,
    siswa
})

