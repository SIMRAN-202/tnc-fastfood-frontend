function handleSubmit(event) {
    event.preventDefault(); // stop default form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("pno").value.trim();
    const message = document.getElementById("message").value.trim();

    // Get error span elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const messageError = document.getElementById("messageError");

    // Clear previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    // Validate Name
    if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
    }

    // Validate Phone
    const phonePattern = /^[0-9]{10}$/;
    if (phone === "") {
        phoneError.textContent = "Phone number is required.";
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        phoneError.textContent = "Enter a 10-digit phone number.";
        isValid = false;
    }

    // Validate Message
    if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters.";
        isValid = false;
    }

    // If all valid
    if (isValid) {
        alert("Form submitted successfully!");
        document.querySelector("form").reset();
    }
}







