//  we do not need js file 
// if you need calculator use eval and do not try to find difficulties
// index.js

// Function to evaluate the expression and update the result
function calculate() {
    try {
        // Get the expression from the input field
        const expression = document.calc.txt.value;
        // Evaluate the expression, calkulacija
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
// function addToHistory(expression, result) {
//     // Get the history list element
//     const historyList = document.getElementById('historyList');
//     // Create a new list item element
//     const listItem = document.createElement('p');
//     // Set the text content of the list item to the expression and result
//     listItem.textContent = `${expression} = ${result}`;
//     // Print history to console
//     console.log(`${expression} = ${result}`);
//     // Append the list item to the history list
//     historyList.appendChild(listItem);
// }

function addToHistory(expression, result) {
    // Get the history list element
    const historyList = document.getElementById('historyList');
    // Create a new list item element
    const listItem = document.createElement('div');
    listItem.className = 'history-item';
    
    // Create a span for the expression and result
    const itemText = document.createElement('span');
    itemText.textContent = `${expression} = ${result}`;
    
    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function() {
        historyList.removeChild(listItem);
    };
    
    // Append the text and button to the list item
    listItem.appendChild(itemText);
    listItem.appendChild(deleteButton);
    
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


// Function to save the history to a text file
function saveHistory() {
    const historyList = document.getElementById('historyList');
    const historyItems = historyList.getElementsByClassName('history-item');
    // Initialize an empty string to store the history text
    let historyText = '';

    // Loop through each history item
    for (let item of historyItems) {
        const itemText = item.querySelector('span').textContent;
        // Append the item text to the history text string, followed by a newline character
        historyText += itemText + '\n';
    }

    const blob = new Blob([historyText], { type: 'text/plain' });
    const link = document.createElement('a'); // Create a temporary anchor element
    link.href = URL.createObjectURL(blob);
    link.download = 'history.txt'; // Set the download attribute of the anchor to specify the filename
    link.click();  // Programmatically trigger a click event on the anchor to start the download
}