# Day 2 — Simple Calculator (HTML / CSS / JavaScript)

A browser-based calculator built with vanilla HTML, CSS, and JavaScript as part of the 100 Days of Code challenge.

## Features

- Basic arithmetic: addition, subtraction, multiplication, division
- Decimal number support
- Prevents invalid inputs (consecutive operators, multiple decimal points)
- Responsive layout
- Error handling for malformed expressions

## Getting Started

No build step needed — just open `index.html` in any browser:

```bash
cd 100DaysCoding/simple_calculator
open index.html
```

Or drag `index.html` into a browser window.

## Tech Stack

- HTML5
- CSS3
- JavaScript (vanilla, no dependencies)

## Code Structure

| File | Description |
|---|---|
| `index.html` | Calculator layout and button grid |
| `styles.css` | Styling and responsive design |
| `main.js` | Calculator logic |

## Key Functions (`main.js`)

| Function | Description |
|---|---|
| `append(number)` | Adds a digit or number to the display |
| `operation(operator)` | Appends an operator, replacing any trailing one |
| `appendDecimal()` | Adds a decimal point (once per operand) |
| `clearDisplay()` | Clears the entire display |
| `calculate()` | Evaluates the expression and shows the result |
