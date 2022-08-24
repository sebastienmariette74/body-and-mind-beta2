/*!
 * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector("#sidebarToggle");
  if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //     document.body.classList.toggle('sb-sidenav-toggled');
    // }
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sb-sidenav-toggled")
      );
    });
  }
});

window.onload = () => {
  let activateUser = document.querySelectorAll(".activate-user");

  for (let button of activateUser) {
    button.style.cursor = "pointer";
    button.addEventListener("click", (event) => {
      if (
        button.dataset.disabled === "disabled" ||
        button.dataset.role != "admin"
      ) {
        button.style.cursor = "default";
        event.preventDefault();
      } else {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("get", `${button.dataset.slug}/active-user`);
        xmlhttp.send();
      }
    });
  }

  let activateModule = document.querySelectorAll(".activate-module");

  for (let button of activateModule) {
    button.addEventListener("click", (event) => {
      if (button.dataset.role === "admin") {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open(
          "get",
          `${button.dataset.slug}/${button.dataset.idmodule}/active-module`
        );
        xmlhttp.send();
      } else {
        event.preventDefault();
      }
    });
  }

  let deleteButton = document.querySelectorAll(".modal-trigger");
  for (let button of deleteButton) {
    button.addEventListener("click", () => {
      document.querySelector(
        ".modal-footer a"
      ).href = `${button.dataset.slug}/${button.dataset.id}`;
      document.querySelector(
        ".modal-body"
      ).textContent = `Voulez-vous supprimer ${button.dataset.name} ?`;
    });
  }

  let query = document.querySelector(".js-query");

  let async = (url) => {
    return (async () => {
      // GET request using axios with async/await
      const content = document.querySelector("#content");
      const response = await axios.get(url);
      content.innerHTML = response.data;
    })();
  };

  function onClickFilter(event) {
    event.preventDefault();
    let urlQuery = this.href + "/" + query.value;
    let url = "";
    if (query.value === "") {
      url = this.href;
      async(url);
    } else {
      url = urlQuery;
      async(url);
    }
    query.value = "";
  }

  document.querySelectorAll("a.js-filter").forEach(function (link) {
    link.addEventListener("click", onClickFilter);
  });


  /*_______________ NAVBAR ________________________*/
  let navLinks = document.querySelectorAll(".nav-link");

  let current = location.href;

  for (let navLink of navLinks) {
    if (navLink.href == current) {
      navLink.className.replace("active", "");
      navLink.className += " active";
      navLink.style.color = "#fff";
    }
  }

};
