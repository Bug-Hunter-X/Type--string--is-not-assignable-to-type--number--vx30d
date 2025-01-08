function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

function isNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

function safeAdd(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    console.error('Invalid input: both arguments must be numbers.');
    return 0; // Or handle error appropriately
  }
}

function safeSubtract(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return subtract(a,b);
  } else {
    console.error('Invalid input: both arguments must be numbers.');
    return 0; // Or handle error appropriately
  }
}

let result1 = safeAdd(5, 3);
let result2 = safeSubtract(10, 5);
let result3 = safeAdd("5",3); // will throw error
let result4 = safeSubtract(10,"5"); // will throw error

console.log(result1); // Output: 8
console.log(result2); // Output: 5
console.log(result3); //Output: 0 and error message
console.log(result4); // Output: 0 and error message