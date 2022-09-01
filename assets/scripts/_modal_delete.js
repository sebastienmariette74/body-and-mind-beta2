
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