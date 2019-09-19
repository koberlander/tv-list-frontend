/*
HOW I CREATED THIS SORT METHOD
 1. Create a function called handleTitleSort. I did a regular function but an arrow function would be fine too.
 2. handleTitleSort takes in three parameters - an array, the firstIndex and the secondIndex (item to swap with firstIndex)
    - the array I am passing in is programs
 3. Set value of first swap location, to a variable called firstValue. In this case, I want to compare the title of each program, which I access via bracket and dot notation.
 4. Update the first swap location (firstIndex) with the value of the 2nd swap location (secondIndex)
 5. Update the second swap location with the value of firstValue
*/

// STEPS 1 & 2 - CREATE FUNCTION AND PASS IN ARGUMENTS
export default function handleTitleSort(programs, firstIndex, secondIndex){

  // STEP 3 - SET THE TITLE OF THE FIRST PROGRAM IN ARRAY TO FIRST VALUE
  const firstValue = programs[firstIndex].title
  console.log('the first index item is: ', firstValue)


  // STEP 4 - CHANGE VALUE OF programs[firstValue] TO secondIndex IN ORDER TO COMPARE IT WITH A NEW ITEM IN MY PROGRAMS ARRAY
  programs[firstValue] = programs[secondIndex]
  console.log('the new firstValue is: ', programs[firstValue])

  // STEP 5: UPDATE THE SECOND SWAP LOCATION WITH T
}
