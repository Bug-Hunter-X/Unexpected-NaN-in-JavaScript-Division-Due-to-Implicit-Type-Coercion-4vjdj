# Unexpected NaN in JavaScript Division

This repository demonstrates a common yet subtle JavaScript bug related to implicit type coercion during division.  The `myFunction` in `bug.js` is designed to divide two numbers, but it unexpectedly returns `NaN` when a string is used as the divisor.

The solution (`bugSolution.js`) shows how to enhance this function to explicitly check for non-numeric input and handle those cases appropriately, avoiding the `NaN` issue.

This issue highlights the importance of strict type checking and defensive programming in JavaScript to prevent unexpected behavior and runtime errors.