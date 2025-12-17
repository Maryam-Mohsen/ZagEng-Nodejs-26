## 1. Environment Setup & Outputs

* **Code Placement:** JS can be written inside the `<script></script>` tag in HTML or in an external `.js` file (Recommended for organization).
* **Output Methods:**
* `console.log()`: Prints data to the browser console (Primary debugging tool).
* `document.write()`: Writes directly into the HTML document.
* `window.alert()`: Displays data in a popup alert box.


* **Comments:** Use `//` for single-line and `/* */` for multi-line comments.

## 2. Data Types

JavaScript is **dynamically typed**, meaning variables can hold different data types over time:

* **String:** Text data, wrapped in `' '` or `" "`.
* **Number:** Integers and floating-point numbers.
* **Boolean:** Logical values: `true` or `false`.
* **Array:** Lists of data, e.g., `["HTML", "CSS", "JS"]`.
* **Object:** Collections of properties, e.g., `{name: "Osama", age: 37}`.
* **Undefined:** A variable that has been declared but not assigned a value.
* **Null:** An intentional empty value.

## 3. Variables (`var`, `let`, `const`)

Understanding the difference in **Scope** and **Hoisting** is crucial:
| Feature | `var` | `let` | `const` |
| :--- | :--- | :--- | :--- |
| **Scope** | Function Scope | Block Scope `{}` | Block Scope `{}` |
| **Re-declaration** | Allowed | Not Allowed | Not Allowed |
| **Re-assignment** | Allowed | Allowed | Not Allowed |
| **Hoisting** | Initialized as `undefined` | Hoisted but not initialized | Hoisted but not initialized |

## 4. Strings & Template Literals

* **Escaping:** Use `\` to include special characters like quotes inside a string (e.g., `'It\'s me'`).
* **Concatenation:** Joining strings using the `+` operator.
* **Template Literals:** Introduced in ES6 using Backticks (```).
* Allows multi-line strings.
* Variable interpolation: Use `${variableName}` inside the string.



## 5. Arithmetic Operators

* **Basic Ops:** Addition `+`, Subtraction `-`, Multiplication `*`, Division `/`, Modulo `%` (remainder).
* **Increment/Decrement:** `++` (add 1) and `--` (subtract 1).
* **Unary Plus (+):** Converts a string to a number (e.g., `+"100"` becomes `100`).
* **Unary Negation (-):** Converts to a number and negates the sign.

## 6. Number Methods & Math Object

### Number Methods:

* `toString()`: Converts a number to a string.
* `toFixed(n)`: Rounds a number to `n` decimals (returns a string).
* `parseInt()`: Parses a string and returns an integer.
* `parseFloat()`: Parses a string and returns a floating-point number.
* `Number.isInteger()`: Checks if the value is a whole number.

### Math Object:

* `Math.round()`: Rounds to the nearest integer.
* `Math.ceil()`: Rounds **up** to the nearest integer.
* `Math.floor()`: Rounds **down** to the nearest integer.
* `Math.min(val1, val2...)`: Returns the smallest number.
* `Math.max(val1, val2...)`: Returns the largest number.
* `Math.pow(base, exponent)`: Power operation.
* `Math.random()`: Returns a random decimal between 0 (inclusive) and 1 (exclusive).

