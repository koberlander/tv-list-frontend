export function fetchPrograms(action){
  //using thunk will allow us to pass in dispatch to our fetch
  fetch('http://localhost:3000/api/v1/programs', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'}
    }
   )
  .then(res => res.json())
  .then(json => console.log(json))

  return action
}
