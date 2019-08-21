
export const deleteProgram = (programId) => {
  console.log('programId: ', programId)

  return (dispatch) => {
    dispatch({type: 'START_DELETE_PROGRAM_REQUEST'})

    fetch(`http://localhost:3000/api/v1/programs/${programId}`,{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(res => dispatch({type: 'DELETE_PROGRAM', id: programId}))
  }
}




/* The code below doesn't work because the argument in that last .then() is whatever comes from res.json() in the .then before it. So the first .then(res => res.json()) has an argument called 'res' which is the resolved promise from then fetch request.
The argument in the next .then will be the result of res.json() from the previous then. However, I won't use that argument in that second .then because I already have the id from it being passed in as an argument to the deleteProgram function (see function declaration above).

So the second then can look something like: .then(response => dispatch({type: 'DELETE_PROGRAM', id: id}))
I won't need to use the response because the id coming in as an argument to your deleteProgram function (see above).
The reason you were getting that error is because when you set up .then(dispatch => dispatch({type: 'DELETE_PROGRAM', id: ${id}`}))`

I was reassigning the value of dispatch to be the response from the previous then which is a json object so that error was saying 'dispatch' is not a function because you assigned it the value of an object. */

/*return (dispatch) => {
  fetch(`http://localhost:3000/api/v1/programs/${id}`,{
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
  })
  .then(res => res.json())
  .then(dispatch => dispatch({type: 'DELETE_PROGRAM', id: id})) */
