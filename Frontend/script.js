


function processInput() {
  var inputNumber = document.getElementById("inputNumber").value;
  var result = document.getElementById("result");

  // Validate input as a number
  if (isNaN(inputNumber)) {
    result.textContent = "Please enter a valid number.";
    return;
  }
  // Handle negative numbers
  if (inputNumber <= 0) {
    result.textContent = "Enter a positive value.";
    return;
  }

  // Convert input to a positive integer
  inputNumber = Math.abs(parseInt(inputNumber));


  // Check for even number
  if (inputNumber % 2 === 0) {
    var evenNumbers = [];
    for (var i = 1; evenNumbers.length < 3; i++) {
      if ((inputNumber + i) % 2 === 0) {
        evenNumbers.push(inputNumber + i);
      }
    }
    result.textContent = "Next 3 even numbers: " + evenNumbers.join(", ");
    return;
  }

  // Check for odd number
  if (inputNumber % 2 !== 0) {
    var oddNumbers = [];
    for (var j = 1; oddNumbers.length < 3; j++) {
      if ((inputNumber + j) % 2 !== 0) {
        oddNumbers.push(inputNumber + j);
      }
    }
    result.textContent = "Next 3 odd numbers: " + oddNumbers.join(", ");
    return;
  }
}
