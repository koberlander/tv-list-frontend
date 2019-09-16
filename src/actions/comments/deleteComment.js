export function deleteComment(commentId, programId){
  // console.log('commentId: ', commentId);
  // console.log('programId: ', programId);

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/programs/${programId}/comments/${commentId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    .then(res => res.json())
    .then(program => dispatch({type: 'DELETE_COMMENT', payload: program}))
  }

}
