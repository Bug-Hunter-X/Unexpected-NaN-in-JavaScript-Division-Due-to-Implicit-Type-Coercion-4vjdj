function myFunction(a, b) {
  // Explicit type checking to avoid implicit type coercion
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Invalid input. Both parameters must be numbers.';
  } 
  if (a === 0 || b === 0) {
    return 0; // Handle zero values
  }
  return a / b;
}

console.log(myFunction(10, 2)); // Output: 5
console.log(myFunction(0, 2)); // Output: 0
console.log(myFunction(10, 0)); // Output: 0
console.log(myFunction(10, '2')); // Output: Error: Invalid input. Both parameters must be numbers.
console.log(myFunction(10,undefined)); // Output: Error: Invalid input. Both parameters must be numbers.