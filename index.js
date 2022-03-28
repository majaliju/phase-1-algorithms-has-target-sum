function hasTargetSum(array, target) {
  // one of the optimal versions from the video following the initial git lesson



  for (let i = 0; i < array.length; i++){
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++){
      if (array[j] === complement) return true;
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here  
*/



/* my initial approach -- the non-optimal method, just a first draft
  a pyramid style problem 
for the A number in the array 
  for the B number in the array 
    add these two numbers and check if equal target
    if yes --> return true
    if no --> check A + C, A + D, etc until the array runs out 
    then start again with the B number, and add the +C, + D numbers etc
*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
