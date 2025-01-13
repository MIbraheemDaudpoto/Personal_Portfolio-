// JavaScript to toggle menu visibility
document.getElementById("menu-toggle").addEventListener("click", function (event) {
    const navbarMenu = document.getElementById("navbar-menu");
    const body = document.querySelector("body");

    // Toggle the menu visibility
    navbarMenu.classList.toggle("active");

    // Prevent the body click from toggling immediately when clicking the button
    event.stopPropagation();

    // Close the menu if the user clicks outside of it
    body.addEventListener("click", function bodyClickListener(e) {
        // Check if the click is outside the navbar menu
        if (!navbarMenu.contains(e.target) && e.target.id !== "menu-toggle") {
            navbarMenu.classList.remove("active");
            // Remove this event listener after it's used
            body.removeEventListener("click", bodyClickListener);
        }
    });
});
