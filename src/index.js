import React from 'react';
import ReactDOM from 'react-dom'
import style from './style.css'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {BrowserRouter as Router} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import programReducer from './reducers/programReducer'

//Compose allows me to combine more than one middleware.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//createStore takes in my reducer and the composeEnhancers function we made above allows me to use dev tools AND apply thunk. In short, I made deeply nested functions and saved them to the store variable. Sneaky!
const store = createStore(programReducer, composeEnhancers(applyMiddleware(thunk)))

//Still need to attach react router to access the views in Header/Menu and use a switch statement to see one view at a time.
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
document.getElementById('root'));
