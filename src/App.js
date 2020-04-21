import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers'

import Siswa from './components/Siswa'

const store = createStore(reducers, applyMiddleware(thunk))

store.subscribe(() => {

  console.log('store.getState()', store.getState())
  
})

function App() {
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
