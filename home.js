//Get modal elements
const logoModal = document.getElementById("logoModal");

//Open modal when clicking the logo
function openModal() {
    logoModal.style.display="flex";
}

// Close Modal Function when clicking the close button
function closeModal() {
    logoModal.style.display ="none";
}

// Close modal if user clicks outside the image
window.addEventListener("click", function (event) {
    if (event.target === logoModal) {
        closeModal();
    }
});

window.addEventListener("DOMContentLoaded", function () {
    logoModal.style.display ="none";
});
