
const addComment = (comment, programId) => {

  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/programs/${programId}/comments`, {
      method: 'POST',
      headers: ({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify(comment)
    })
    .then(res => res.json())
    .then(comment => dispatch({type: 'ADD_COMMENT', payload: comment}))
  }
}

export default addComment
