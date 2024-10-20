// Simulating a "database"
const mockDatabase = {
    user: "user",
    password: "00"
};

// Get elements
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

// Toggle password visibility
togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.classList.toggle('visible');
});

// Handle form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Check credentials
    if (enteredUsername === mockDatabase.user && enteredPassword === mockDatabase.password) {
        // Redirect to home page
        window.location.href = "home.html";
    } else {
        alert('Invalid username or password');
    }
});
