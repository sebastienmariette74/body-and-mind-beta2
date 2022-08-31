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

let async = (url, element = null) => {
  axios
    .get(url)
    .then((response) => {
      if (element != null) {
      $(`.${element}`).html(response.data);
      }
    })
    .catch((error) => {
      $(`.${element}`).parent().html = `Erreur: ${error.message}`;
      console.error("Il y a une erreur dans la requête", error);
    });
};

$(document).ready(function () {
  
  window.onload = () => {     

    /*_______________ NAVBAR ________________________*/

    let navLinks = $(".nav-link");
    let current = location.href;

    for (let navLink of navLinks) {
      if (
        navLink.href == current ||
        navLink.href.split("/").slice(0, 4)[3] ==
          current.split("/").slice(0, 4)[3]
      ) {
        navLink.className.replace("active", "");
        navLink.className += " active";
        navLink.style.color = "#fff";
      }
    }

    /* _____________ ENVOI DE REQUETE ____________________________*/

    

    /* _____________ ACTIVATION/DESACTIVATION DE MODULE ____________________________*/

    $("#modules").on("click", ".activate-module", function (e) {
      let slugModule = $(this).data("slug");
      let moduleId = $(this).data("idmodule");
      let url = "";
      let href = window.location.pathname.split("/");
      if ($(this).data("role") === "admin") {
        if (href.includes("partenaires")) {
          url = `${window.location.protocol}//${window.location.host}/partenaires/${slugModule}/${moduleId}/active-module`;
        } else {
          url = `${window.location.protocol}//${window.location.host}/structures/${slugModule}/${moduleId}/active-module`;
        }
        async(url);
      } else {
        e.preventDefault();
      }
    });

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

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == $("#modal-switch")) {
        $("#modal-switch").css("display", "none");
      }
    };

    $(".modal-switch-user").css("cursor", "pointer");

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

      let params = new URLSearchParams(window.location.search);
      let paramsToString = params.toString();
      let url = "";
      let href = window.location.pathname.split("/");
      if (href.includes("partenaires")) {
        url = `${window.location.protocol}//${window.location.host}/partenaires/${slug}/active-user/?${paramsToString}`;
      } else {
        url = `${window.location.protocol}//${window.location.host}/structures/${slug}/active-user/?${paramsToString}`;
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

  function onClickFilter(event) {
    event.preventDefault();
    let filter = $(this).attr("name");
    let page = $("#filters input:hidden").attr("value");
    let query = $(".js-query").val();
    let params = new URLSearchParams();
    params.append("filter", filter);
    params.append("page", page);
    if ($(".js-query").val() != "") {
      params.append("query", query);
    }

    let url = new URL(window.location.href);
    console.log(url.pathname + "?" + params.toString() + "&ajax=1");
    async(url.pathname + "?" + params.toString() + "&ajax=1", "content");

    // On met à jour l'url
    history.pushState({}, null, url.pathname + "?" + params.toString());
  }

  $(document).on("click", ".js-filter", onClickFilter);

  /*_______________ PAGINATION ________________________*/
  $("#content").on("click", ".page-link", function (e) {
    e.preventDefault();
    let params = $(this).attr("href");
    let url = new URL(window.location.href);
    async(url.pathname + params + "&ajax=1", "content");
  });
});
