function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Handle zero values
  }
  return a / b;
}

console.log(myFunction(10, 2)); // Output: 5
console.log(myFunction(0, 2)); // Output: 0
console.log(myFunction(10, 0)); // Output: 0
console.log(myFunction(10, '2')); // Output: NaN (Uncommon: Implicit type coercion)