//#2Define a function, as a function expression, maxOfThreethat takes three numbers as arguments 
//and returns the largest of them. Again, the Math.max method is not allowed.
function maxOfThree(a,b,c){
    if(a>b && a>c){
        return a;
    }
else if (b>a && b>c){
    return b;
}
else{
    return c;
}
}
console.log(maxOfThree(2,5,1));
console.log("maximumofthreenumbers+");

//#3Define a function, as a function declaration, 
//isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char);
  }
  
  console.log(isCharAVowel('a')); 

  //#4 Define a function, as a function expression, sumArraythat takes
  // an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.
const sumArray = function(array) {
    let sum = 0;
    for (let num of array) {
      sum += num;
    }
    return sum;
  }
  
  console.log(sumArray([2, 4, 5])); 
  //Define a function, as a function declaration, multiplyArraythat takes an 
  //array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
  function multiplyArray(array) {
    let product = 1;
    for (let num of array) {
      product *= num;
    }
    return product;
  }
  
  console.log(multiplyArray([2, 4, 5]));

  //Define a function,
  // as a function expression, numArgsthat returns the number of arguments passed to the function when called
  const numArgs = function() {
    return arguments.length;
  }
  
  console.log(numArgs(1,2,3)); 