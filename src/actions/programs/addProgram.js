export const addProgram = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/programs', {
      method: 'POST',
      headers: ({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data =>{
      console.log('D');
       dispatch({type: 'ADD_PROGRAM', payload: data})
     })

  }

}
