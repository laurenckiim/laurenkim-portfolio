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
