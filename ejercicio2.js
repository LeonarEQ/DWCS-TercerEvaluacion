"use strict";

//Declarar un array de objetos de clientes
var datosClientes = [
  {
    id: 1,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
  },
  {
    id: 2,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
  },
  {
    id: 3,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
  },
  {
    id: 4,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
  },
];
//Declara un array de objetos de pizzas
var datosPizza = [
  {
    nombre: "Pizza margarita",
    precio: 20,
    identificador: 1,
    ingredientes: ["Champiñones", "Jamón Cocido"],
  },
  {
    nombre: "Pizza barbacoa",
    precio: 25,
    identificador: 2,
    ingredientes: ["Carne", "Salsa barbacoa", "Extra de queso"],
  },
  {
    nombre: "Pizza atún",
    precio: 22,
    identificador: 3,
    ingredientes: ["Atún", "Aceitunas negras", "Anchoa"],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  let idCliente = prompt("Introduce el identificador cliente");


  for (let i = 0; i < datosClientes.length; i++) {

    if (parseInt(idCliente) == datosClientes[i].id) {
      const divCliente = document.getElementById("cliente");
      const h1Cliente = document.createElement("h1");
      h1Cliente.textContent =
        datosClientes[i].first_name + " " + datosClientes[i].last_name;
      divCliente.appendChild(h1Cliente);
    } 
   
  }

  function mostrarNombre(id, email, first_name, last_name) {
    return;
  }
});
