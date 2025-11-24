function sanitize(input) {
    return input.replace(/[<>"'()]/g, "");
}

function validateForm() {
    let fname = sanitize(document.getElementById("fname").value);
    let lname = sanitize(document.getElementById("lname").value);
    let email = sanitize(document.getElementById("email").value);
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if (fname === "" || lname === "" || email === "" || pass === "" || confirm === "") {
        alert("All fields are required!");
        return false;
    }

    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) {
        alert("Invalid email address!");
        return false;
    }

    if (pass !== confirm) {
        alert("Passwords do not match!");
        return false;
    }

    return true;
}
