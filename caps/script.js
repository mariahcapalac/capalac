document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const fullName = document.getElementById("full-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const gender = document.querySelector("input[name='gender']:checked");
        const dob = document.getElementById("dob").value;
        const phone = document.getElementById("phone").value.trim();
        const address = document.getElementById("address").value.trim();
        const newsletter = document.getElementById("newsletter").checked;


        if (!fullName || !email || !password || !gender || !dob || !phone || !address) {
            alert("Please fill out all required fields.");
            return;
        }


        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const phonePattern = /^\+?[0-9\s\-]{7,15}$/;
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

        alert("Form submitted successfully!");
    });
});