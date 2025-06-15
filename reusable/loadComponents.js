function loadComponent(id, file) {
    fetch(file)
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar-container", "reusable/navbar.html");
    loadComponent("footer-container", "reusable/footer.html");
});