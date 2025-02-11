function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Division by zero";
  }
  return a / b;
}

const operations = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide
};

function calculate(a, operator, b) {
  if (!operations[operator]) {
    return "Invalid operator";
  }
  //Added input validation to check if inputs are numbers
  if(typeof a !== 'number' || typeof b !== 'number'){
    return "Invalid input: Operands must be numbers";
  }
  return operations[operator](a, b);
}

console.log(calculate(5, '+', 3)); // Output: 8
console.log(calculate(10, '-', 4)); // Output: 6
console.log(calculate(7, '*', 2)); // Output: 14
console.log(calculate(9, '/', 0)); // Output: Division by zero
console.log(calculate(5, '**', 2)); // Output: Invalid operator
console.log(calculate("a", '+', 3)); //Output: Invalid input: Operands must be numbers