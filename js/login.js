let loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", event => {
    event.preventDefault();
    login();
});