const axios = require('axios').default;
import {async} from "../functions/async.js"

      /* _____________ ACTIVATION/DESACTIVATION DE MODULE ____________________________*/

      $('.activate-module').css('cursor', 'pointer');
  
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