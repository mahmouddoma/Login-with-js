// @ts-nocheck
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const usernamePattern = /^[a-zA-Z0-9_-]{3,16}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;

    if (!usernamePattern.test(username)) {
        document.getElementById('error-message').innerHTML = 'Please enter a valid username (3-16 characters: letters, numbers, "_", "-")';
        return false;
    }

    if (!passwordPattern.test(password)) {
        document.getElementById('error-message').innerHTML = 'Please enter a valid password (6-20 characters: uppercase letter, lowercase letter, number)';
        return false;
    }
    return true;
}
// submit logic
let timeoutId;
function handleSubmit(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const errorMessageElement = document.getElementById('error-message');
    const successMessageElement = document.getElementById('success-message');

    if (username.trim() === '' || password.trim() === '') {
        const errorMessage = 'Please fill in all fields';
        errorMessageElement.innerHTML = errorMessage;
        errorMessageElement.classList.add('error'); 
        successMessageElement.innerHTML = ''; 
        return false;
    }

    const isValid = validateLogin();

    if (!isValid) {
        const errorMessage = 'Invalid username or password format';
        errorMessageElement.innerHTML = errorMessage;
        errorMessageElement.classList.add('error'); 
        successMessageElement.innerHTML = ''; 
        return false;
    } else {
        const successMessage = 'تم التحقق بنجاح!';
        successMessageElement.innerHTML = successMessage;
        successMessageElement.classList.remove('error'); 
        successMessageElement.classList.add('success');
        successMessageElement.style.display = 'block';
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        setTimeout(() => {
            successMessageElement.style.display = 'none';
        }, 2000);
        return true;
    }
}

function togglePassword() {
    const passwordField = document.getElementById('password');
    const showPasswordBtn = document.getElementById('showPasswordBtn');

    showPasswordBtn.addEventListener('click', function () {
        const type = passwordField.type === 'password' ? 'text' : 'password';
        passwordField.type = type;
    });
}
togglePassword();
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });