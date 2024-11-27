//  we do not need js file 
// if you need calculator use eval and do not try to find difficulties
// index.js

// Function to evaluate the expression and update the result
function calculate() {
    try {
        // Get the expression from the input field
        const expression = document.calc.txt.value;
        // Evaluate the expression
        const result = eval(expression);
        // Update the input field with the result
        document.calc.txt.value = result;
        // Add the expression and result to the history
        addToHistory(expression, result);
    } catch (e) {
        // If there's an error, display 'Error' in the input field
        document.calc.txt.value = 'Error';
    }
}

// Function to add the expression and result to the history
function addToHistory(expression, result) {
    // Get the history list element
    const historyList = document.getElementById('historyList');
    // Create a new list item element
    const listItem = document.createElement('li');
    // Set the text content of the list item to the expression and result
    listItem.textContent = `${expression} = ${result}`;
    // Print history to console
    console.log(`${expression} = ${result}`);
    // Append the list item to the history list
    historyList.appendChild(listItem);
}

// Function to clear the history
function clearHistory() {
    // Get the history list element
    const historyList = document.getElementById('historyList');
    // Clear the inner HTML of the history list
    historyList.innerHTML = '';
}