import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware,compose } from 'redux'
import {combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';
import './index.css';
import App from './App';
import appReducer from './appReducer'
import { Provider } from 'react-redux'



const rootReducer= combineReducers({appReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store= createStore(
    rootReducer,
    composeEnhancers(applyMiddleware( ReduxThunk))
   )

ReactDOM.render(< Provider store={store}>
    <App/>
</ Provider>
, document.getElementById('root'));


