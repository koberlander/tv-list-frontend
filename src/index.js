import React from 'react';
import ReactDOM from 'react-dom'
import './style.css'
import 'semantic-ui-css/semantic.min.css'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import programReducer from './reducers/programReducer'
import commentReducer from './reducers/commentReducer'

//Compose allows me to combine more than one middleware.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//set up allows programReducer and commentReducer to be passed into createStore as one variable
const rootReducer = combineReducers({
  programs: programReducer,
  comments: commentReducer
})

//createStore takes in my reducer and the composeEnhancers function we made above allows me to use dev tools AND apply thunk. In short, I made deeply nested functions and saved them to the store variable. Sneaky!
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
document.getElementById('root'));
