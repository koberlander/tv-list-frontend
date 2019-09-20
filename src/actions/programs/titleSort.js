/*
  HOW I CREATED THIS SWAP METHOD
    1. Create a function called handleTitleSwap. I did a regular function but an arrow function would be fine too.
    2. handleTitleSwap takes in three parameters - an array (mine is an array of programs), the firstIndex and the secondIndex (item to swap with firstIndex)
    3. Set value of first swap location, to a variable called firstValue. In this case, I want to compare the title of each program, which I access via bracket and dot notation.
    4. Update the first swap location (firstIndex) with the value of the 2nd swap location (secondIndex)
    5. Update the second swap location with the value of firstValue
*/

// STEPS 1 & 2 - CREATE FUNCTION AND PASS IN ARGUMENTS
function handleTitleSwap(programs, firstIndex, secondIndex){

  // STEP 3 - SET THE TITLE OF THE FIRST PROGRAM IN ARRAY TO FIRST VALUE
  const firstValue = programs[firstIndex].title
  console.log('original value of firstIndex: ', firstValue)


  // STEP 4 - CHANGE VALUE OF programs[firstValue] TO secondIndex IN ORDER TO COMPARE IT WITH A NEW ITEM IN MY PROGRAMS ARRAY
  programs[firstValue] = programs[secondIndex]
  console.log('new value of firstIndex: ', programs[firstValue])

  // STEP 5: UPDATE THE SECOND SWAP LOCATION WITH THE VALUE OF FIRST VALUE

  programs[secondIndex] = firstValue
  console.log('new value of secondIndex: ', programs[secondIndex])
}

/*

To Finish This Section, Visit The Learn Instruct Video Here: https://www.youtube.com/watch?v=ITIiVC7gGNI&feature=youtu.be&t=1205


  HOW I CREATED THIS SELECTION SORT METHOD
    1. Find the title with the lowest value -- A, B, C, etc. each have numerical values.

*/
