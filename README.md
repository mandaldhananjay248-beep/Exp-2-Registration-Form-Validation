# Exp-2 — Registration Form Validation

A responsive and colorful user registration form developed using HTML, CSS, and JavaScript. The project demonstrates client-side form validation for mandatory fields and validates user inputs such as name, email, phone number, PIN code, password, date of birth, gender, city, and address.

## 🎯 Aim

To develop a website where users can enter their details in a registration form and client-side JavaScript validates the information before allowing submission. The form checks mandatory fields and validates formats such as email ID, phone number, PIN code, and password.

## 🎯 Objectives

- Create a user registration form.
- Validate mandatory fields, name, and email ID.
- Validate phone number and PIN code formats.
- Validate password strength and confirmation.
- Validate date of birth and gender selection.
- Validate city and address.
- Display appropriate validation messages.
- Prevent invalid form submission.
- Provide a responsive and attractive interface.

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure of the registration form |
| CSS3 | Styling, layout, colors, responsiveness, and animations |
| JavaScript | Client-side form validation and interaction |

## ✨ Features

- Modern colorful interface and responsive design.
- Mandatory-field and name validation.
- Email, phone number, and PIN code validation.
- Password strength and confirmation validation.
- Date-of-birth validation that rejects future dates and ages under 13.
- Required gender selection, city, and address validation.
- Field-specific error messages and valid/invalid styling.
- Blur validation and complete submit validation.
- Success message and form reset after valid registration.
- Password visibility toggle for both password fields.

## 📋 Form Fields

| Field | Validation |
|------|------------|
| Full Name | Required; at least 3 characters; English letters and spaces only |
| Email ID | Required; simple email format regular expression |
| Phone Number | Required; exactly 10 digits |
| Date of Birth | Required; valid date, not in the future, and at least 13 years old |
| Gender | Required; select one of the four available options |
| City | Required; at least 2 English letters/spaces, with no other characters |
| Address | Required; at least 10 characters after trimming outer whitespace |
| PIN Code | Required; exactly 6 digits |
| Password | Required; at least 8 characters, including uppercase, lowercase, and a number |
| Confirm Password | Required; must match the password |

## 🔍 Validation Logic

JavaScript validates all fields on form submission and validates individual text/date fields when they lose focus:

1. Required-field validators reject empty values.
2. Name must contain at least 3 English letters or spaces.
3. Email is checked with a regular expression for a basic address format.
4. Phone number must contain exactly 10 digits.
5. PIN code must contain exactly 6 digits.
6. Password must be at least 8 characters and include an uppercase letter, a lowercase letter, and a number.
7. Confirm password must match the password.
8. Date of birth must be selected, cannot be in the future, and must meet the minimum age of 13.
9. One gender option must be selected.
10. City must contain at least 2 English letters or spaces and no other characters.
11. Address must contain at least 10 characters after leading and trailing whitespace is trimmed.

The script uses `document.getElementById()` to find form controls and their error-message elements. Regular expressions check name, email, phone, PIN, and password rules. It updates the page with DOM manipulation by setting error text and adding validation classes. The form submit handler calls `event.preventDefault()` and displays success only when every validator passes.

## ⚡ Event Handling

The project uses `addEventListener()` to connect JavaScript behavior to the form. Blur events validate individual fields, gender is checked when an option is changed, and the form's submit event runs the complete validation sequence. `preventDefault()` keeps the browser from submitting invalid data, while DOM updates show errors or the registration success message.

## 📂 Project Structure

```text
Exp-2-Registration-Form-Validation/
├── index.html
├── style.css
├── script.js
├── README.md
└── .gitignore
```

## 🚀 How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/mandaldhananjay248-beep/Exp-2-Registration-Form-Validation.git
   ```
2. Open the project folder:

    ```bash
    cd Exp-2-Registration-Form-Validation
    ```
3. Open the folder in VS Code:

    ```bash
    code .
    ```

    If the `code` command is unavailable, open the folder from VS Code's File menu.
4. Open `index.html` with the Live Server extension, or open the file directly in a browser.
5. Enter test values and submit the form to exercise validation.

## 🧪 Test Cases

| Test Case | Input | Expected Result |
|---|---|---|
| Empty form | No data | Required-field errors |
| Invalid name | Numbers or special characters | Name validation error |
| Invalid email | `invalid-email` | Email validation error |
| Invalid phone | Not exactly 10 digits | Phone validation error |
| Invalid PIN | Not exactly 6 digits | PIN validation error |
| Weak password | Missing required length or character type | Password validation error |
| Password mismatch | Different passwords | Confirmation error |
| Invalid date of birth | Future date or age under 13 | Date-of-birth error |
| Missing gender | No option selected | Gender selection error |
| Invalid city/address | City has disallowed characters or address is under 10 characters | Corresponding validation error |
| Valid form | All values satisfy the rules | Registration successful; form resets |

## 📚 Learning Outcomes

This project demonstrates HTML form creation, CSS styling, responsive web design, JavaScript DOM manipulation, event handling, regular expressions, client-side validation, error handling, user feedback, and form submission control.

## 🔮 Future Improvements

- Connect the form to a backend and database.
- Add server-side validation, email verification, and authentication.
- Further improve accessibility and security.

## 👨‍💻 Author

**Dhananjay Mandal**
Project: **Exp-2 — Registration Form Validation**

## 🔗 Repository

https://github.com/mandaldhananjay248-beep/Exp-2-Registration-Form-Validation
