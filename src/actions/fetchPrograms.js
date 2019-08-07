export function fetchPrograms(){
  //using thunk will allow us to pass in dispatch to our fetch
  // we are returning a function and not an action, and that the power we now get is the ability to dispatch actions from inside of the returned function. So with that power, we first dispatch an action to state that we are about to make a request to our API. Then we make the request. We do not hit our then() function until the response is received, this means that we are not dispatching our action of type 'ADD_PROGRAMS' until we receive our data. Thus we are able to send along that data.
  return(dispatch) => {
    dispatch({type: 'START_ADDING_PROGRAMS_REQUEST'})

      return fetch('http://localhost:3000/api/v1/programs')
        .then(res => res.json())
        .then(programs => dispatch({type: 'FETCH_PROGRAMS', payload: programs}))

 }
}


//  headers: {
//    'Accept': 'application/json',
//    'Content-Type': 'application/json'}
//  }
// )
