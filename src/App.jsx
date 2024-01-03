import { useState } from 'react'
import "./assets/styles/index.scss";
import Router from './router';
import { Provider } from 'react-redux';
import { Store } from './store';
import { createStore } from 'redux';


function App() {

  return (
    <Provider store={Store} >
      <Router />
    </Provider>
  )
}

export default App
