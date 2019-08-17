export function toggleWatchlist(programId){
  console.log('programId: ', programId)

  return (dispatch) => {
    dispatch({type: 'START_TOGGLE__REQUEST'})

    fetch(`http://localhost:3000/api/v1/programs/${programId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        watchlist: state.watchlist
      })
    })


  }
}
