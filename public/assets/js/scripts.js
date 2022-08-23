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
        console.log('ok');
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
        button.addEventListener("click", (event) => {
        console.log(button.dataset.role);
        if (button.dataset.role === "admin") {
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.open("get", `${button.dataset.slug}/active-user`);
            xmlhttp.send();
        } else {
            event.preventDefault();
        }
        });
    }

    let activateModule = document.querySelectorAll(".activate-module");

    for (let button of activateModule) {
        button.addEventListener("click", (event) => {
        if (button.dataset.role === "admin") {
            console.log('ok');
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.open("get", `${button.dataset.slug}/${button.dataset.idmodule}/active-module`);
            xmlhttp.send();
        } else {
            event.preventDefault();
        }
        });
    }
    
    let deleteButton = document.querySelectorAll(".modal-trigger");
    // console.log(deleteButton);
    for (let button of deleteButton) {
        button.addEventListener("click", () => {
        console.log(button.dataset.slug);
        console.log(button.dataset.id);
        document.querySelector(
            ".modal-footer a"
        ).href = `${button.dataset.slug}/${button.dataset.id}`;
        document.querySelector(
            ".modal-body"
        ).textContent = `Voulez-vous supprimer ${button.dataset.name} ?`;
        });
    }   
    
    function onClickFilter (event){
        event.preventDefault();

        const url = this.href;
        console.log(url);

        (async () => {
            // GET request using axios with async/await
            const content = document.querySelector('#content');
            const response = await axios.get(url);
            console.log(response.data);
            content.innerHTML = response.data;
        })();
    }

    console.log(document.querySelectorAll('a.js-filter'));
    document.querySelectorAll('a.js-filter').forEach(function(link){
        link.addEventListener('click', onClickFilter)
    })
    
};
