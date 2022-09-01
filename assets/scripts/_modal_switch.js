
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