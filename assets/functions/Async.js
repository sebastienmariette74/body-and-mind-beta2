// export default class Async {

//     constructor(url, element = null) {
//         this.url = url;
//         this.element = element;
//     }
    
//     axios
//       .get(url)
//       .then((response) => {
//         if (element != null) {
//         $(`.${element}`).html(response.data);
//         }
//       })
//       .catch((error) => {
//         $(`.${element}`).parent().html = `Erreur: ${error.message}`;
//         console.error("Il y a une erreur dans la requête", error);
//       });
//   };