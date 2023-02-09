const faqs = document.querySelectorAll(".faq");
const boxIllustration = document.querySelector(".box-illustration");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });

  faq.addEventListener("click", () => {
    if (faq.classList.contains("active")) {
      boxIllustration.style.marginLeft = "-1rem";
    } else {
      boxIllustration.style.marginLeft = "0";
    }
  });
});
