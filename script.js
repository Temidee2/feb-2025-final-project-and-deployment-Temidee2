document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for subscribing!");
});

const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle Dark Mode";
document.body.prepend(toggleButton);

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
