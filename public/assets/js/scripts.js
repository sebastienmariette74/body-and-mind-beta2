/*!
 * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
 */
//
// Scripts
//

// let url = window.location.protocol;
// console.log(url);

$(document).ready(function () {
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

    // let myswitch = document.getElementById("myswitch");
    // let modalSwitch = document.getElementById("modal-switch-user");

    // for (let button of activateUser) {
    //   button.style.cursor = "pointer";
    //   button.addEventListener("click", (event) => {
    //     let mod = document.querySelector(".modal-backdrop");
    //     console.log(mod);
    //     console.log("ok");
    //     modalSwitch.style.display = "block";
    //     mod.style.display = "block";

    //     console.log(button);

    //     // if (
    //     //   button.dataset.disabled === "disabled" ||
    //     //   button.dataset.role != "admin"
    //     // ) {
    //     //   button.style.cursor = "default";
    //     //   event.preventDefault();
    //     // } else {
    //     // document.querySelector(
    //     //   ".modal-footer a"
    //     // ).href = `${button.dataset.slug}/active-user`;
    //     document.querySelector(
    //       ".modal-body-switch"
    //     ).textContent = `Voulez-vous activer/désactiver ${button.dataset.name} ?`;
    //     document.querySelector(".extra").addEventListener("click", () => {
    // let xmlhttp = new XMLHttpRequest();
    // xmlhttp.open("get", `${button.dataset.slug}/active-user`);
    // xmlhttp.send();
    //       let mod = document.querySelector(".modal-backdrop");
    //       console.log(mod);
    //       let modalSwitch = document.getElementById("modal-switch-user");
    //       mod.style.display = "none";
    //       modalSwitch.style.display = "none";
    //     });
    //   });
    // }

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

    // ____________________ MODAL SUPPRESSION D'UN PARTENAIRE/STRUCTURE ____________________//

    $("#content").on("click", ".modal-trigger", function (e) {
      let href = $(this).data("slug") + "/" + $(this).data("id");

      $(".modal-footer-delete a").attr("href", href);

      let name = $(this).data("name");

      $(".modal-body-delete").text("Voulez-vous supprimer " + name + "?");
    });

    $("#cards").on("click", ".modal-trigger", function (e) {
      let href = $(this).data("slug") + "/" + $(this).data("id");
      $(".modal-footer-delete a").attr("href", href);
      let name = $(this).data("name");
      $(".modal-body-delete").text("Voulez-vous supprimer " + name + "?");
    });

    // ____________________ MODAL ACTIVATION D'UN PARTENAIRE/STRUCTURE ____________________//

    // Get the modal
    let modalSwitch = document.getElementById("modal-switch");

    /* Get the button that opens the modal */
    let switches = $(".modal-switch-user");

    // Get the <span> element that closes the modal
    let span = document.getElementById("close-switch");

    // When the user clicks on <span> (x), close the modal
    // span.addEventListener("click", () => {
    //   modalSwitch.style.display = "none";
    // });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == $('#modal-switch')) {
        modalSwitch.style.display = "none";
      }
    };

    let slug = "";
    let state = "";
    let name = "";

    $("#cards").on("click", ".modal-switch-user", function (e) {
      if (
        $(this).data("disabled") === "disabled" ||
        $(this).data("role") != "admin"
      ) {
        e.preventDefault();
        $("#modal-switch").css("display", "block");
        $(".modal-body-switch").text(
          `La salle ne peut pas être activée quand le partenaire est désactivé.`
        );
        $("#btn-switch").css("display", "none");
        $("#btn-switch-cancel").text("VALIDER");
        $("#btn-switch-cancel").css("backgroundColor", "#0d6efd");
        $("#btn-switch-cancel").css("border", "none");
        $("#btn-switch-cancel").css("outline", "none");
        // $("#btn-switch-cancel").css("boxShadow", "0 0 0 0.25rem #0d6efd");
      } else {
        e.preventDefault();
        switchChecked = $(this).is(":checked");
        name = $(this).data("name");
        if (!switchChecked) {
          $(".modal-body-switch").text(
            `Etes-vous sûr de vouloir désactiver ${name} ?`
          );
        } else {
          $(".modal-body-switch").text(
            `Etes-vous sûr de vouloir activer ${name} ?`
          );
        }

        $("#modal-switch").css("display", "block");
        slug = $(this).data("slug");
        state = $(this).data("state");
      }
    });

    $("#content").on("click", ".modal-switch-user", function (e) {
      e.preventDefault();
      let switchChecked = $(this).is(":checked");
      name = $(this).data("name");
      if (!switchChecked) {
        $(".modal-body-switch").text(
          `Etes-vous sûr de vouloir désactiver ${name} ?`
        );
      } else {
        $(".modal-body-switch").text(
          `Etes-vous sûr de vouloir activer ${name} ?`
        );
      }

      $("#modal-switch").css("display", "block");
      slug = $(this).data("slug");
      state = $(this).data("state");
    });

    $(".btn-switch").click(function (e) {
      e.preventDefault();
      let url = "";
      let href = window.location.pathname.split("/");
      if (href.includes("partenaires")) {
        url = `${window.location.protocol}//${window.location.host}/partenaires/${slug}/active-user`;
      } else {
        url = `${window.location.protocol}//${window.location.host}/structures/${slug}/active-user`;
        if (href[2] != "") {
          let date = new Date();
          date.setTime(date.getTime() + 1000);
          $.cookie("card", "ok", {
            expires: date,
            path: "/;SameSite=None",
            secure: true,
          });
        }
      }
      async(url, "content");
      $("#modal-switch").css("display", "none");
    });

    $(".btn-switch-cancel").click(function (e) {
      e.preventDefault();
      $("#modal-switch").css("display", "none");
    });
  };

  // ______________________ FILTRE DES PARTENAIRES/STRUCTURES PAR NOM, OU ACTIVE/DESACTIVE _________________ //

  let query = document.querySelector(".js-query");

  let async = (url, element) => {
    return (async () => {
      // GET request using axios with async/await
      const response = await axios.get(url);
      $(`.${element}`).html(response.data);
    })();
  };

  function onClickFilter(event) {
    event.preventDefault();
    let urlQuery = this.href + "/" + query.value;
    let url = "";
    if (query.value === "") {
      url = this.href;
      async(url, "content");
    } else {
      url = urlQuery;
      async(url, "content");
    }
    query.value = "";
  }

  $(document).on('click', "a.js-filter", onClickFilter )

  // document.querySelectorAll("a.js-filter").forEach(function (link) {
  //   link.addEventListener("click", onClickFilter);
  // });

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
});
