import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers'
// 2. 
import Siswa from './components/Siswa'

// yang ini menjadikan reducers ke store dan menggunakan plugin namanya applyMiddleware
// thunk digunakan utk melakukan fetch yang berhubungan dengan async
const store = createStore(reducers, applyMiddleware(thunk))

store.subscribe(() => {

  console.log('store.getState()', store.getState())
  
})

function App() {
  // 1. provider selalu di taruh di awal awal app bermula
  // dan diberikan props dengan nama store dimana valuenya adalah dari combineReducers
  // ke siswa
  return (
    <Provider store={store}>
      <h1>Aplikasi Sekolah</h1>
      <div>ada navbar</div>
      <div>content untuk Guru</div>
      <Siswa/>
    </Provider>
  );
}

export default App;
