const imgEles = document.querySelectorAll(".panel");

console.log(imgEles);

imgEles.forEach((e) => {
  e.addEventListener("click", () => {
    imgEles.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
  });
});
