document.addEventListener('DOMContentLoaded', () => {
    // Fill in your code here!
    var form = document.querySelector('#registrationForm');
    var submitButton = document.querySelector('button[type="submit"]');
    var resetButton = document.querySelector('button[type="reset"]');
    var numFamilyMem = document.querySelector('input#numFamilyMembers');

    // Event listener for Submit button
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        var inputs = retrieveInputs();
        
        inputs.forEach((inputField) => {
            // Validate field
            var fieldId = inputField.id;
            var errorField = document.querySelector(`span#${fieldId}Error`);
            if (inputField.value.length < 1) {
                errorField.innerHTML = "This field is compulsory.";
            } else {
                errorField.innerHTML = "";
            }
            console.log(inputField.value);

            // Store user inputs in localStorage
            localStorage.setItem(`${fieldId}`, inputField.value);
        })        
    });

    // Event listener for Reset button
    resetButton.addEventListener('click', () => {
        var inputs = retrieveInputs();

        inputs.forEach((inputField) => {
            var fieldId = inputField.id;

            // Delete user inputs from localStorage
            localStorage.removeItem(`${fieldId}`);
        })  
    });

    // Event listener for number of family members field
    numFamilyMem.addEventListener('input', () => {
        addFamilyMemName(numFamilyMem.value);
    })

    // Display stored user inputs
    retrieveStoredInputs();

    // Update family member name fields based on stored user inputs
    if (numFamilyMem.value > 0) {
        addFamilyMemName(numFamilyMem.value);
        retrieveStoredInputs();
    }
});

function retrieveInputs() {
    return document.querySelectorAll('input');
}

function retrieveStoredInputs() {
    var inputs = retrieveInputs();

    inputs.forEach((inputField) => {
        var fieldId = inputField.id;

        // Store user inputs in localStorage
        var storedInput = localStorage.getItem(`${fieldId}`);
        if (storedInput) {
            inputField.value = storedInput;
        }
    })  
}

function addFamilyMemName(num) {
    var familyMemNameDiv = document.querySelector('#familyMembers');
    familyMemNameDiv.innerHTML = "";
    
    for (let i=0; i < num; i++) {
        // Create container div
        var newContainer = document.createElement('div');
        newContainer.setAttribute('id', `member${i+1}Div`);
        newContainer.setAttribute('class', `familyMemberDiv`);

        // Create label
        var newLabel = document.createElement('label');
        newLabel.setAttribute('for', `member${i+1}`);
        newLabel.innerHTML = `Member #${i+1} name`;
        
        // Create input field
        var newInput = document.createElement('input');
        newInput.setAttribute('type', 'text');
        newInput.setAttribute('id', `member${i+1}`);
        newInput.setAttribute('name', `member${i+1}`);
        newInput.setAttribute('required', 'required');

        // Create error span
        var newErrorSpan = document.createElement('span');
        newErrorSpan.setAttribute('class', 'error');
        newErrorSpan.setAttribute('id', `member${i+1}Error`);

        // Add input field with label to div element
        newContainer.append(newLabel, newInput)
        familyMemNameDiv.append(newContainer, newErrorSpan);
        
    }
}
