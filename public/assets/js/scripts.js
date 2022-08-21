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
        button.addEventListener("click", (event) => {
        // if (button.dataset.role === "admin") {
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.open("get", `${button.dataset.slug}/active-user`);
            xmlhttp.send();
        // } else {
        //     event.preventDefault();
        // }
        });
    }

    let activateModule = document.querySelectorAll(".activate-module");

    for (let button of activateModule) {
        button.addEventListener("click", (event) => {
        // if (button.dataset.role === "admin") {
            console.log('ok');
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.open("get", `${button.dataset.slug}/${button.dataset.idmodule}/active-module`);
            xmlhttp.send();
        // } else {
        //     event.preventDefault();
        // }
        });
    }

    let filterButtons = document.querySelectorAll(".filter-button");
    for (let button of filterButtons) {
        button.addEventListener("click", () => {
        // $.ajax({
        //   type: "POST",
        //   url: "",
        //   async: false,
        //   data: { race: button.dataset.path },
        // });

        const headers = new Headers();
        const body = JSON.stringify({
            firstname: "David",
            lastname: "Marty",
            position: "Outside center",
        }); //JSON.stringify pour convertir en objet JSON et éviter le risque des caractères spéciaux.

        const init = {
            method: "POST",
            headers: headers,
            body: body,
        };

        fetch("", init).then((response) => console.log(response));

        // let xmlhttp = new XMLHttpRequest();
        // let path = button.dataset.path;
        // console.log(path);
        // xmlhttp.open("POST", "/");
        // let data = new FormData();
        // data.append('race', 'chien');
        // // xmlhttp.open('get', `${path}`);
        // xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // // xmlhttp.send('race = chien');
        // xmlhttp.send(data);
        });
    }
    
    let deleteButton = document.querySelectorAll(".modal-trigger");
    console.log(deleteButton);
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
};
