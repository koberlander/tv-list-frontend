export function toggleWatchlist(programId, watchlistValue){
  console.log('programId: ', programId)

  return (dispatch) => {
    dispatch({type: 'START_TOGGLE_WATCHLIST_REQUEST'})

    fetch(`http://localhost:3000/api/v1/programs/${programId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        watchlist: watchlistValue
      })
    })
    .then(res => res.json())
    .then(res => dispatch({type: 'TOGGLE_WATCHLIST', id: programId, watchlist: watchlistValue}))

  }
}
