const axios = require('axios').default;
import {async} from "../functions/async.js"

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