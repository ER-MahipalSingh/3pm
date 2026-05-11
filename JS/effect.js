// window.addEventListener("scroll", () => {
//   if (window.scrollY > 400) {
//     console.log("Scroll...");
//   }
// });

const box = document.getElementById("box");

// window.addEventListener("scroll", function () {
//   if (window.scrollY > 400) {
//     box.style.background = "red";
//   }
// });

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    box.classList.add("scrolled");
  } else {
    box.classList.remove("scrolled");
  }
});
