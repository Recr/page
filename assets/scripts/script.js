document.getElementById('btn').addEventListener('click', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form values
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const country = document.getElementById('country').value;

    // Simple email validation regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Check if all fields are filled
    if (!fname) {
        alert('Please enter your first name.');
        return;
    }

    if (!lname) {
        alert('Please enter your last name.');
        return;
    }

    if (!email) {
        alert('Please enter your email.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!message) {
        alert('Please enter your message.');
        return;
    }

    if (!country) {
        alert('Please select your country.');
        return;
    }

    // If all validations pass, submit the form (for demo purposes, we'll just alert success)
    alert('Form submitted successfully!');
    location.reload();

})