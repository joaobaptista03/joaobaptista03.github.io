function onSubmitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const data = {
        name: name,
        email: email,
        message: message,
    };

    fetch("https://formspree.io/f/mqkrdlde", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
    })
        .then((response) => {
            document.getElementsByClassName("sent_form")[0].style.display = "flex";
        })
        .catch((error) => {
            console.log(error);
            alert("Error submitting form. Please try again later.");
        });
}