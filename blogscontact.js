
// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "") {
        alert(`Thank you, ${name}! We have received your message and will get back to you soon.`);
        document.getElementById('contact-form').reset();
    } else {
        alert("Please fill out all the fields.");
    }
});
