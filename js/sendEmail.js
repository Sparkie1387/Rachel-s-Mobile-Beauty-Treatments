function sendMail(contactForm) {
    emailjs.send("outlook", "rachelsbeautytreatments", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "treatment_bookings": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}