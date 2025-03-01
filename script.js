const apiUrl = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";  // Use your correct Google Apps Script URL

// Handle Registration
document.getElementById("registerForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    var data = {
        action: "register",
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        department: document.getElementById("department").value.trim(),
        year: document.getElementById("year").value.trim(),
        section: document.getElementById("section").value.trim(),
        rank: document.getElementById("rank").value.trim(),
        password: document.getElementById("password").value.trim()
    };

    fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())  // Parse JSON correctly
    .then(responseData => {
        alert(responseData.message);
        if (responseData.status === "success") {
            window.location.href = "login.html";
        }
    })
    .catch(error => alert("Registration failed. Try again."));
});

// Handle Login
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    var data = {
        action: "login",
        email: document.getElementById("loginEmail").value.trim(),
        password: document.getElementById("loginPassword").value.trim()
    };

    fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())  // Parse JSON correctly
    .then(responseData => {
        document.getElementById("loginResponse").innerText = responseData.message;
        if (responseData.status === "success") {
            window.location.href = "home.html";
        }
    })
    .catch(error => alert("Login failed. Try again."));
});
