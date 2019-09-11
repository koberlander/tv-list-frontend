
export const addComment = (comment, programId) => {

  /*
  In my backend 'create' method for a comment, after the comment is saved I return the program
  since the comments are nested as program.comments.
  This way allows me to avoid having to search for the program in the case statement as was done
  in the Redux CRUD lab.

  */

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
    .then(program => dispatch({type: 'ADD_COMMENT', payload: program}))
  }
}
