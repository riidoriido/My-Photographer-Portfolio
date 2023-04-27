const loader = document.querySelector(".spinner-wrapper");

window.addEventListener("load", () => {
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 4000);
});
