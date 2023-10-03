// JavaScript code to process contact form
function processContactForm() {
    const form = document.getElementById("contact-form");
    const responseDiv = document.getElementById("response");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const formDataObject = {};
        
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // Here, you can send the formDataObject to your server using AJAX or perform any other desired action.
        
        // For this example, we'll simply display a success message.
        responseDiv.innerHTML = "Your message has been sent successfully!"; 
        form.reset();
    });
}
