# User Registration Form
A User Registration Form is an essential component of web applications that allows new users to create accounts by providing necessary personal information. Typically, it collects key details such as the user’s name, email, and password, ensuring secure and unique user identification within the system.

## Features
Core Fields:
Name: Collects the user’s name.
Email: Used for account identification.
Password: A password that the user will use to log into the application.
This form is a foundational component for applications that require user interaction, helping ensure a secure and seamless onboarding experience for users.

# Explanation oh HTML page:
Specifies the form’s target endpoint (/submit) and the HTTP method (post)
```sh 
<form action="/submit" method="post">
```
Each field has a label and an input. Labels are linked to inputs with the for attribute, matching the id of the input
```sh
<label> and <input> tags
```
Ensures each field must be filled before form submission.
```sh
required attribute
```
Uses type="password" to hide the password characters as they’re entered
```sh
Password input
```
# Explanation of CSS Enhancements:
Centered Layout: Uses flexbox to center the form vertically and horizontally.
Form Container: Applies a background color, padding, and box-shadow to give a card-like appearance.
Label Styling: Labels are styled for readability with consistent spacing and color.
Input Styling: Inputs have padding and subtle transitions on focus, providing a clean, interactive experience.
Submit Button: Styled with a primary color, a hover effect, and full-width display for easy tapping.

# Explanation of JavaScript Enhancements:
Email Validation:
Uses a regular expression to check if the email format is valid. If it’s not, an error message is shown.
Password Validation:
Ensures the password is at least 8 characters, contains a number, and an uppercase letter using a regular expression. Gives an error if it doesn’t meet these criteria.
Error Display:
Error messages (.error elements) are shown only if the corresponding validation fails, enhancing usability.
Form Submission:
If any validation fails, the form submission is prevented by returning false from the validateForm() function.

# How to run:
Double-click the index.html and page opens in default browser.



