document.addEventListener("DOMContentLoaded", function () {
  const btnClose = document.querySelector(".btn-close");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  btnClose.addEventListener("click", function () {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
    bsCollapse.hide();
  });

  navbarCollapse.addEventListener("show.bs.collapse", function () {
    btnClose.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  navbarCollapse.addEventListener("hide.bs.collapse", function () {
    btnClose.style.display = "none";
    document.body.style.overflow = "";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const triggers = [
    document.querySelector(".animation-trigger-1"),
    document.querySelector(".animation-trigger-2"),
  ];

  const images = [
    document.querySelector(".meteoapp-column-one.image-column-1 img"),
    document.querySelector(".chosenapp-column-two.image-column-2 img"),
  ];

  const textColumns = [
    document.querySelector(".text-column-1"),
    document.querySelector(".text-column-2"),
  ];

  let lastScrollTop = 0;

  function checkScroll() {
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    const scrollDirection = scrollTop > lastScrollTop ? "down" : "up";
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

    if (scrollDirection === "down") {
      const triggerOffset = windowHeight * 0.8;

      triggers.forEach((trigger, index) => {
        const triggerTop = trigger.getBoundingClientRect().top;

        if (triggerTop < windowHeight - triggerOffset) {
          images[index].classList.add("animate");
          textColumns[index].classList.add("animate");
        } else {
          images[index].classList.remove("animate");
          textColumns[index].classList.remove("animate");
        }
      });
    }
  }
  checkScroll();
  document.addEventListener("scroll", checkScroll);
});
