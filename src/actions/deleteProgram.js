
export const deleteProgram = (id) => {
  // console.log('id: ', id)


  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/programs/${id}`,{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(dispatch => dispatch({type: 'DELETE_PROGRAM', id: `${id}`}))
  }
}
