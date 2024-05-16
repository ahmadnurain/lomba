const closeSidebarBtn = document.getElementById("closeSidebarBtn");
const openSidebarBtn = document.getElementById("openSidebarBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

closeSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-0");
  sidebar.classList.add("-translate-x-full");
  overlay.classList.remove("block");
  overlay.classList.add("hidden");
});

openSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
  sidebar.classList.add("-translate-x-0");
  overlay.classList.remove("hidden");
  overlay.classList.add("block");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-0");
  sidebar.classList.add("-translate-x-full");
  overlay.classList.remove("block");
  overlay.classList.add("hidden");
});
