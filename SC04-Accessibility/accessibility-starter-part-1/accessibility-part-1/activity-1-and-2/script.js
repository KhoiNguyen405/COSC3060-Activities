document.addEventListener("DOMContentLoaded", function() {
    var submitBtn = document.querySelector('.submitButton');
    submitBtn.addEventListener('click', function() {
        alert("Form Submitted!");
        // Here you can add more functionality like validating the form
        // and sending data to a server.
    });

    submitBtn.addEventListener('keydown', function(event) {
        if (event.keyCode == 13 || event.keyCode == 32) {
            alert("Enter or Space key pressed!");
        }
    })
});
