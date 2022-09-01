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

/*_______________ PAGINATION ________________________*/
$("#content").on("click", ".page-link", function (e) {
    e.preventDefault();
    let params = $(this).attr("href");
    let url = new URL(window.location.href);
    async(url.pathname + params + "&ajax=1", "content");
});