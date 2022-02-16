{
  const backButton = document.getElementById("back-to-top-link");

  function updateBackToTopButton() {
    if (window.scrollY > 400) {
      backButton.classList.add("show");
    } else {
      backButton.classList.remove("show");
    }
    let to;
    setTimeout(() => {
      clearTimeout(to);
      window.requestAnimationFrame(updateBackToTopButton);
    })
  }

  window.requestAnimationFrame(updateBackToTopButton);

  backButton
    .addEventListener("click", function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
}
