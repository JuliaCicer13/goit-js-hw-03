"use strict"



function filterArray(numbers, value) {

const newArrayNumbers = [];


   for (let i = numbers; i <= value; i++) {
        
       if (numbers >= value) {
    
      return  newArrayNumbers.push([i]);
}

    }

    



}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]