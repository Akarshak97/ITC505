// Basic sanitization to help prevent XSS in client-side
function sanitize(input) {
    return input.replace(/[<>"'()]/g, "");
}

function validateForm() {
    // Get fields
    let fnameField = document.getElementById("fname");
    let lnameField = document.getElementById("lname");
    let emailField = document.getElementById("email");
    let passField = document.getElementById("password");
    let confirmField = document.getElementById("confirm");

    // Trim + sanitize values
    let fname = sanitize(fnameField.value.trim());
    let lname = sanitize(lnameField.value.trim());
    let email = sanitize(emailField.value.trim());
    let password = passField.value;
    let confirm = confirmField.value;

    // Put sanitized values back into inputs (optional but good)
    fnameField.value = fname;
    lnameField.value = lname;
    emailField.value = email;

    // ========= 1. Empty field validation =========
    if (fname === "") {
        alert("First name is required.");
        fnameField.focus();
        return false;
    }

    if (lname === "") {
        alert("Last name is required.");
        lnameField.focus();
        return false;
    }

    if (email === "") {
        alert("Email address is required.");
        emailField.focus();
        return false;
    }

    if (password === "") {
        alert("Password is required.");
        passField.focus();
        return false;
    }

    if (confirm === "") {
        alert("Please confirm your password.");
        confirmField.focus();
        return false;
    }

    // ========= 2. Name validations =========
    // Only alphabetic characters, at least 2 letters
    let namePattern = /^[A-Za-z]{2,}$/;

    if (!namePattern.test(fname)) {
        alert("First name should contain only letters and be at least 2 characters long.");
        fnameField.focus();
        return false;
    }

    if (!namePattern.test(lname)) {
        alert("Last name should contain only letters and be at least 2 characters long.");
        lnameField.focus();
        return false;
    }

    // ========= 3. Email format validation =========
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email (e.g., user@example.com).");
        emailField.focus();
        return false;
    }

    // ========= 4. Password strength validation =========
    // At least 8 chars, one upper, one lower, one digit, one special char
    let passwordLengthOK = password.length >= 8;
    let hasUpper = /[A-Z]/.test(password);
    let hasLower = /[a-z]/.test(password);
    let hasDigit = /[0-9]/.test(password);
    let hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!passwordLengthOK) {
        alert("Password must be at least 8 characters long.");
        passField.focus();
        return false;
    }

    if (!hasUpper || !hasLower || !hasDigit || !hasSpecial) {
        alert("Password must include uppercase, lowercase, a number, and a special character.");
        passField.focus();
        return false;
    }

    // ========= 5. Password match validation =========
    if (password !== confirm) {
        alert("Passwords do not match. Please re-enter.");
        confirmField.focus();
        return false;
    }

    // ========= 6. Final success message =========
    alert("Form submitted successfully!");

    // If you have no backend and just want the popup, use:
    // return false;

    return true; // allow actual submission
}
