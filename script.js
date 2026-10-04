// Get the form
const form = document.getElementById("registrationForm");

// Get input fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const dobInput = document.getElementById("dob");
const genderGroup = document.getElementById("genderGroup");
const genderError = document.getElementById("genderError");
const cityInput = document.getElementById("city");
const addressInput = document.getElementById("address");
const pincodeInput = document.getElementById("pincode");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Get error message elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const dobError = document.getElementById("dobError");
const cityError = document.getElementById("cityError");
const addressError = document.getElementById("addressError");
const pincodeError = document.getElementById("pincodeError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

const successMessage = document.getElementById("successMessage");

const today = new Date();
const todayString = [today.getFullYear(), String(today.getMonth() + 1).padStart(2, "0"), String(today.getDate()).padStart(2, "0")].join("-");
dobInput.max = todayString;

// Toggle password visibility without changing the validation flow.
document.querySelectorAll(".password-toggle").forEach(function (toggle) {
    toggle.addEventListener("click", function () {
        const input = document.getElementById(toggle.dataset.passwordTarget);
        const isVisible = input.type === "text";

        input.type = isVisible ? "password" : "text";
        toggle.setAttribute("aria-pressed", String(!isVisible));
        toggle.setAttribute(
            "aria-label",
            (isVisible ? "Show " : "Hide ") +
                (input.id === "password" ? "password" : "confirm password")
        );
        input.focus();
    });
});

// Function to show error
function showError(input, errorElement, message) {
    input.classList.add("invalid");
    input.classList.remove("valid");
    errorElement.textContent = message;
}


// Function to show success
function showSuccess(input, errorElement) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    errorElement.textContent = "";
}


// Validate name
function validateName() {
    const name = nameInput.value.trim();

    if (name === "") {
        showError(nameInput, nameError, "Name is required.");
        return false;
    }

    if (name.length < 3) {
        showError(nameInput, nameError, "Name must contain at least 3 characters.");
        return false;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
        showError(nameInput, nameError, "Name can contain only letters and spaces.");
        return false;
    }

    showSuccess(nameInput, nameError);
    return true;
}


// Validate email
function validateEmail() {
    const email = emailInput.value.trim();

    if (email === "") {
        showError(emailInput, emailError, "Email is required.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        showError(emailInput, emailError, "Enter a valid email address.");
        return false;
    }

    showSuccess(emailInput, emailError);
    return true;
}


// Validate date of birth and minimum age
function validateDOB() {
    const dateOfBirth = dobInput.value;

    if (dateOfBirth === "") {
        showError(dobInput, dobError, "Please select a valid date of birth.");
        return false;
    }

    const selectedDate = new Date(`${dateOfBirth}T00:00:00`);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (Number.isNaN(selectedDate.getTime()) || selectedDate > currentDate) {
        showError(dobInput, dobError, "Date of birth cannot be in the future.");
        return false;
    }

    const minimumDate = new Date(
        currentDate.getFullYear() - 13,
        currentDate.getMonth(),
        currentDate.getDate()
    );

    if (selectedDate > minimumDate) {
        showError(dobInput, dobError, "You must be at least 13 years old.");
        return false;
    }

    showSuccess(dobInput, dobError);
    return true;
}


// Validate gender selection
function validateGender() {
    const selectedGender = form.querySelector('input[name="gender"]:checked');

    if (!selectedGender) {
        showError(genderGroup, genderError, "Please select your gender.");
        return false;
    }

    showSuccess(genderGroup, genderError);
    return true;
}


// Validate city
function validateCity() {
    const city = cityInput.value.trim();

    if (city.length < 2 || !/^[A-Za-z ]+$/.test(city)) {
        showError(cityInput, cityError, "Please enter a valid city using letters and spaces.");
        return false;
    }

    showSuccess(cityInput, cityError);
    return true;
}


// Validate address
function validateAddress() {
    const address = addressInput.value.trim();

    if (address.length < 10) {
        showError(addressInput, addressError, "Please enter your complete address (at least 10 characters).");
        return false;
    }

    showSuccess(addressInput, addressError);
    return true;
}


// Validate phone number
function validatePhone() {
    const phone = phoneInput.value.trim();

    if (phone === "") {
        showError(phoneInput, phoneError, "Phone number is required.");
        return false;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        showError(
            phoneInput,
            phoneError,
            "Phone number must contain exactly 10 digits."
        );
        return false;
    }

    showSuccess(phoneInput, phoneError);
    return true;
}


// Validate PIN code
function validatePincode() {
    const pincode = pincodeInput.value.trim();

    if (pincode === "") {
        showError(pincodeInput, pincodeError, "PIN code is required.");
        return false;
    }

    if (!/^[0-9]{6}$/.test(pincode)) {
        showError(
            pincodeInput,
            pincodeError,
            "PIN code must contain exactly 6 digits."
        );
        return false;
    }

    showSuccess(pincodeInput, pincodeError);
    return true;
}


// Validate password
function validatePassword() {
    const password = passwordInput.value;

    if (password === "") {
        showError(passwordInput, passwordError, "Password is required.");
        return false;
    }

    if (password.length < 8) {
        showError(
            passwordInput,
            passwordError,
            "Password must contain at least 8 characters."
        );
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        showError(
            passwordInput,
            passwordError,
            "Password must contain at least one uppercase letter."
        );
        return false;
    }

    if (!/[a-z]/.test(password)) {
        showError(
            passwordInput,
            passwordError,
            "Password must contain at least one lowercase letter."
        );
        return false;
    }

    if (!/[0-9]/.test(password)) {
        showError(
            passwordInput,
            passwordError,
            "Password must contain at least one number."
        );
        return false;
    }

    showSuccess(passwordInput, passwordError);
    return true;
}


// Validate confirm password
function validateConfirmPassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (confirmPassword === "") {
        showError(
            confirmPasswordInput,
            confirmPasswordError,
            "Please confirm your password."
        );
        return false;
    }

    if (password !== confirmPassword) {
        showError(
            confirmPasswordInput,
            confirmPasswordError,
            "Passwords do not match."
        );
        return false;
    }

    showSuccess(confirmPasswordInput, confirmPasswordError);
    return true;
}


// Validate fields when user leaves them
nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
phoneInput.addEventListener("blur", validatePhone);
dobInput.addEventListener("blur", validateDOB);
cityInput.addEventListener("blur", validateCity);
addressInput.addEventListener("blur", validateAddress);
pincodeInput.addEventListener("blur", validatePincode);
passwordInput.addEventListener("blur", validatePassword);
confirmPasswordInput.addEventListener("blur", validateConfirmPassword);
genderGroup.querySelectorAll('input[name="gender"]').forEach(function (input) {
    input.addEventListener("blur", validateGender);
    input.addEventListener("change", validateGender);
});


// Form submission
form.addEventListener("submit", function (event) {

    // Prevent normal form submission
    event.preventDefault();

    // Clear previous success message
    successMessage.textContent = "";

    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isDobValid = validateDOB();
    const isGenderValid = validateGender();
    const isCityValid = validateCity();
    const isAddressValid = validateAddress();
    const isPincodeValid = validatePincode();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    // Check whether everything is valid
    if (
        isNameValid &&
        isEmailValid &&
        isPhoneValid &&
        isDobValid &&
        isGenderValid &&
        isCityValid &&
        isAddressValid &&
        isPincodeValid &&
        isPasswordValid &&
        isConfirmPasswordValid
    ) {

        successMessage.textContent = "Registration Successful!";

        // Reset form after successful registration
        form.reset();

        // Remove green borders after reset
        form.querySelectorAll(".valid").forEach(function (field) {
            field.classList.remove("valid");
        });
    }
});