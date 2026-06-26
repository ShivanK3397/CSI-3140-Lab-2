document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registration-form");
    const fullName = document.getElementById("full-name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const program = document.getElementById("program");
    const comments = document.getElementById("comments");
    const selectionFeedback = document.getElementById("selection-feedback");
    const preview = document.getElementById("registration-preview");
    const commentCount = document.getElementById("comment-count");
    const submitButton = document.querySelector("button[type='submit']");

    function updatePreview() {
        if (!preview) return;

        const nameText = fullName.value.trim() || "your name";
        const yearText = program.value || "year of study";
        const emailText = email.value.trim() || "email address";

        preview.textContent = `${nameText} · ${yearText} · ${emailText}`;
    }

    function updateCommentCount() {
        if (!commentCount) return;

        commentCount.textContent = `${comments.value.length} / ${comments.maxLength} characters`;
    }

    function updateSelectionFeedback() {
        if (!selectionFeedback) return;

        const selectedGender = document.querySelector("input[name='gender']:checked");
        const yearText = program.value ? program.options[program.selectedIndex].text : "No year selected yet";

        selectionFeedback.textContent = selectedGender
            ? `Selected gender: ${selectedGender.value}. ${yearText}.`
            : `${yearText}. Choose an option to personalize your registration.`;
    }

    [fullName, email, phone].forEach(function (field) {
        field.addEventListener("input", function () {
            updatePreview();
        });
    });

    comments.addEventListener("input", function () {
        updateCommentCount();
    });

    program.addEventListener("change", function () {
        updatePreview();
        updateSelectionFeedback();
    });

    document.querySelectorAll("input[name='gender']").forEach(function (option) {
        option.addEventListener("change", function () {
            updateSelectionFeedback();
        });
    });

    updatePreview();
    updateCommentCount();
    updateSelectionFeedback();

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let valid = true;

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
                updatePreview();
                updateCommentCount();
                updateSelectionFeedback();
                
                // button disabled briefly after a successful submit
                submitButton.setAttribute("disabled", "true");
                setTimeout(function () {
                    submitButton.removeAttribute("disabled");
                }, 3000);
            }
        })

});