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
  const firstValue = programs[firstIndex].name
  console.log('original value of firstIndex: ', firstValue)


  // STEP 4 - CHANGE VALUE OF programs[firstValue] TO secondIndex IN ORDER TO COMPARE IT WITH A NEW ITEM IN MY PROGRAMS ARRAY
  programs[firstValue] = programs[secondIndex].name
  console.log('new value of firstIndex: ', programs[firstValue])

  // STEP 5: UPDATE THE SECOND SWAP LOCATION WITH THE VALUE OF FIRST VALUE

  programs[secondIndex].name = firstValue
  console.log('new value of secondIndex: ', programs[secondIndex])
}

/*

To Finish This Section, Visit The Learn Instruct Video Here: https://youtu.be/ITIiVC7gGNI?t=1684


  HOW I CREATED THIS findIndexOfMin METHOD
    1. Find the title letter with the lowest value and swap it with the first item in the array (located at index[0]).
       - array is programs
       - item is the program that has the title Barry at index[14]
       - return the index of the smallest value
    2. Find the title letter with the second lowest value in the array and swap it with the item at index[1].
       - array is programs, but it's faster to check out a subarray with every title but Barry.
       - instead of making a copy and shifting off Barry from front, I'll pass in entire array but give it a starting point
    3. Find the title letter with the third lowest value in the array and swap it with the item at index[2].
    3. Keep repeating until the entire array is sorted (aka until you hit array.length).

*/
// alice@flatironschool.com

const findIndexOfMin = (programs, startingPoint) => {
  let minValue = programs[startingPoint]
  let minIndex = startingPoint
  let arrayLength = programs.length

  for (var i = startingPoint + 1; i < arrayLength; i++) {

    if (programs[i].title < minValue) {
      minValue = programs[i]
      console.log("Changing minValue to equal ", programs[i]);
      minIndex = i
    }
  }
}
//
// findIndexOfMin()
