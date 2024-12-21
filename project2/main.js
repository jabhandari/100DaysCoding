const display = document.getElementById('display');

// Append numbers to the display
function append(number) {
  display.value += number;
}

// Handle operations
function operation(operator) {
  const lastChar = display.value.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) {
    display.value = display.value.slice(0, -1);
  }
  display.value += operator;
}

// Append a decimal point
function appendDecimal() {
  const parts = display.value.split(/[\+\-\*\/]/);
  if (!parts[parts.length - 1].includes('.')) {
    display.value += '.';
  }
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Calculate the result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
