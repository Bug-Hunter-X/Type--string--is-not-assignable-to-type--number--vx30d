# Type 'string' is not assignable to type 'number'
This TypeScript bug demonstrates a common type error: assigning a string value to a number variable.  The code includes two functions, `add` and `subtract`, which correctly operate on numbers. However, if you attempt to pass or assign string values to these functions or variables, TypeScript will throw a type error. This is because TypeScript's type system enforces type safety, preventing unexpected behavior at runtime.

## Solution
The solution involves ensuring that all values passed to the `add` and `subtract` functions are of type number. This can be achieved by explicitly type checking inputs, using type guards, or converting string inputs to numbers before performing any calculations.