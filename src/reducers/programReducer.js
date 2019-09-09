
export default function programReducer(state = {}, action){
//this takes the action object we have dispatched and updates the state in some way

  switch (action.type) {
    case 'FETCH_PROGRAMS':
      return action.payload

    case 'ADD_PROGRAM':
    //will update method so that program comes at the top of the list, not the bottom. Need to research because putting action.payload first has the program returning null.
      return [...state, action.payload]

    case 'DELETE_PROGRAM':
      const programs = state.filter(program => program.id !== action.id)
      return programs

    case 'TOGGLE_WATCHLIST':

      /*
          Make a deep copy of the current state by using JSON.stringify to turn my array of programs into a string.
          After creating stringifiedPrograms, we then use JSON.parse to turn it back into a brand new array of objects.
          Then, take the copyOfPrograms and find the specific program that we want to update (here we find it by id).
          After isolating that program, we update the value of watchlist so that each time the button is clicked, it will change the watchlist value.
          Then, return a copy of state, with the program key set to the copyOfPrograms array of objects.
          Updating my programToBeToggled watchlist value still updates it in the copyOfPrograms array.
      */
        // console.log('state.programs:');
        // console.log(state.programs);

      let stringifiedPrograms = JSON.stringify(state)
      console.log('stringifiedPrograms: ', stringifiedPrograms)

      let copyOfPrograms = JSON.parse(stringifiedPrograms)
      console.log('copyOfPrograms: ', copyOfPrograms)

      //this updated code using .findIndex allowed me to manually change the watchlist boolean value fixed the issue I had in Program.js which only let me update the item 1x vs each time the button was clicked.
      let programIndex = copyOfPrograms.findIndex(program => program.id === action.id)
      copyOfPrograms[programIndex].watchlist = !copyOfPrograms[programIndex].watchlist
      console.log('copyOfPrograms after toggle switcheroo: ', copyOfPrograms)

      //commented out the code below because I decided to use findIndex. In the code below, I was finding an object which I toggled the watchlist value of, but it did noupdate that value each time the toggle was clicked, just the one time.
      // let programToBeToggled = copyOfPrograms.find(program => program.id === action.id)
      // // // debugger
      // programToBeToggled.watchlist = !action.watchlist

      return copyOfPrograms

    default:
    return state

  }

}
