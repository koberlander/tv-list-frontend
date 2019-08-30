export default function commentReducer(state = {comments: []}, action){

  switch (action.type) {
    case 'ADD_COMMENT':
      return 'hi'

    default:
      return state
  }
}
