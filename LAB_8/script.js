function sanitize(input) {
    // Remove characters often used in XSS payloads
    return input.replace(/[<>"'()]/g, "");
}

function validateForm() {
    let fnameField = document.getElementById("fname");
    let lnameField = document.getElementById("lname");
    let emailField = document.getElementById("email");
    let passField = document.getElementById("password");
    let confirmField = document.getElementById("confirm");

    let fname = sanitize(fnameField.value.trim());
    let lname = sanitize(lnameField.value.trim());
    let email = sanitize(emailField.value.trim());
    let pass = passField.value;
    let confirm = confirmField.value;

    // Put sanitized values back (optional but nice)
    fnameField.value = fname;
    lnameField.value = lname;
    emailField.value = email;

    // 1. Empty fields check
    if (fname === "") {
        alert("Please enter your first name.");
        fnameField.focus();
        return false;
    }

    if (lname === "") {
        alert("Please enter your last name.");
        lnameField.focus();
        return false;
    }

    if (email === "") {
        alert("Please enter your email address.");
        emailField.focus();
        return false;
    }

    if (pass === "") {
        alert("Please enter a password.");
        passField.focus();
        return false;
    }

    if (confirm === "") {
        alert("Please confirm your password.");
        confirmField.focus();
        return false;
    }

    // 2. Email format check
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) {
        alert("Invalid email format. Example: user@example.com");
        emailField.focus();
        return false;
    }

    // 3. Password match check
    if (pass !== confirm) {
        alert("Passwords do not match. Please re-enter.");
        confirmField.focus();
        return false;
    }

    // ✅ If everything is valid
    alert("Form submitted successfully!");  // success popup

    // Return true if you actually want to submit to the server
    // Return false if you just want the popup and stay on the page
    return true;
}
