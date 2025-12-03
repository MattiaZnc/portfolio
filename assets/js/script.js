const modeBtn = document.getElementById("toggleMode");
modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    modeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

const modal = document.getElementById("cvModal");
document.getElementById("openCvModal").onclick = () => modal.style.display = "flex";
document.getElementById("closeCvModal").onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

const mobileMenu = document.getElementById("mobileMenu");
document.getElementById("mobileMenuBtn").onclick = () => {
    mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
};
