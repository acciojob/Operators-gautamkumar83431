//your JS code here. If required.
  // Calculation logic
    document.getElementById('calculate').addEventListener('click', function () {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      const operator = document.getElementById('operator').value;
      const resultBox = document.getElementById('result');
      let result;

      if (isNaN(num1) || isNaN(num2)) {
        resultBox.textContent = "Please enter valid numbers.";
        return;
      }

      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            resultBox.textContent = "Cannot divide by zero!";
            return;
          }
          result = num1 / num2;
          break;
        default:
          resultBox.textContent = "Invalid operator";
          return;
      }

      resultBox.textContent = "Result: " + result;
    });

    // Change text logic
    document.getElementById('change_text').addEventListener('click', function () {
      const newTexts = ["Bye", "Good Bye", "To", "Your", "Class"];
      const divisions = document.getElementsByClassName('division');
      for (let i = 0; i < divisions.length; i++) {
        divisions[i].textContent = newTexts[i];
      }
    });