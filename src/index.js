import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from './App';
import programReducer from './reducers/programReducer'

//Compose allows us to combine more than one middleware.
//More info: https://redux.js.org/api/compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

//createStore takes in our reducer and the composeEnhancers function we made above to use dev tools AND apply thunk. In short, we made deeply nested functions and saved them to the store variable. Sneaky!
const store = createStore(programReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
