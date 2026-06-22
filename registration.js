const form = document.getElementById("registration-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let valid = true;

    const fullName = document.getElementById("full-name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const program = document.getElementById("program");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const phoneError = document.getElementById("phone-error");
    const programError = document.getElementById("program-error");
    const successMessage = document.getElementById("success-message");

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    programError.textContent = "";
    successMessage.textContent = "";

    fullName.classList.remove("input-error");
    email.classList.remove("input-error");
    phone.classList.remove("input-error");
    program.classList.remove("input-error");

    // Full Name Validation
    if (fullName.value.trim() === "") {
        nameError.textContent = "Full name is required.";
        fullName.classList.add("input-error");
        valid = false;
    } else {
        const words = fullName.value.trim().split(/\s+/);

        if (words.length < 2) {
            nameError.textContent =
                "Please enter both first and last name.";
            fullName.classList.add("input-error");
            valid = false;
        }
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        emailError.textContent = "Email is required.";
        email.classList.add("input-error");
        valid = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent =
            "Please enter a valid email address.";
        email.classList.add("input-error");
        valid = false;
    }

    // Phone Validation
    const phonePattern = /^\+[0-9\- ]{7,20}$/;

    if (phone.value.trim() === "") {
        phoneError.textContent = "Phone number is required.";
        phone.classList.add("input-error");
        valid = false;
    } else if (!phonePattern.test(phone.value)) {
        phoneError.textContent =
            "Phone number must be in the format +1-613-461-3000.";
        phone.classList.add("input-error");
        valid = false;
    }

    // Year of Study Validation
    if (program.value === "") {
        programError.textContent =
            "Please select your year of study.";
        program.classList.add("input-error");
        valid = false;
    }

    // Success
    if (valid) {
        successMessage.textContent =
            "Registration submitted successfully!";
        form.reset();
    }
});