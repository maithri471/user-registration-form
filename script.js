function validateEmail(email) {
    // Simple email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    // Password should be at least 8 characters, contain at least one number and one uppercase letter
    const passwordPattern = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
    return passwordPattern.test(password);
}

function validateForm() {
    // Get form values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let isValid = true;

    // Email validation
    if (!validateEmail(email)) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    // Password validation
    if (!validatePassword(password)) {
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("passwordError").style.display = "none";
    }

    // Prevent form submission if data is invalid
    return isValid;
}
