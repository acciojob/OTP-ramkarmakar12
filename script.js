// script.js
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.code');

    // Set focus to the first input field on page load.
    if (inputs.length > 0) {
        inputs[0].focus();
    }

    // Focus handling for forward typing
    inputs.forEach((input, index) => {
        input.addEventListener('input', function() {
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });
    });

    // Backspace handling
    inputs.forEach((input, index) => {
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
                inputs[index - 1].focus();
                inputs[index - 1].value = '';
            }
        });
    });
});
