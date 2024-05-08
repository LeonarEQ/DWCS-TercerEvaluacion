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

  const datosCliente = (i) => {
    const divCliente = document.getElementById("cliente");
    const h1Cliente = document.createElement("h1");
    h1Cliente.textContent =
      datosClientes[i].first_name + " " + datosClientes[i].last_name;
    divCliente.appendChild(h1Cliente);
  };

  for (let i = 0; i < datosClientes.length; i++) {
    if (parseInt(idCliente) == datosClientes[i].id) {
      datosCliente(i);
    } else if (parseInt(idCliente) > datosClientes.length) {
      alert("no existe el usuario con el id " + parseInt(idCliente));
      break;
    }
  }

  const tablaPizzas = () => {
    const pizzasContenedor = document.getElementById("pizzas");
    const table = document.createElement("table");

    const tr = document.createElement("tr");

    table.appendChild(tr);

    const nombre = document.createElement("th");
    const precio = document.createElement("th");

    nombre.textContent = "NOMBRE";
    precio.textContent = "PRECIO";

    tr.appendChild(nombre);
    tr.appendChild(precio);

    pizzasContenedor.appendChild(table);

    datosPizza.forEach((element) => {
      const tr = document.createElement("tr");

      table.appendChild(tr);

      const nombrePizza = document.createElement("td");
      const precioPizza = document.createElement("td");

      nombrePizza.textContent = element.nombre;
      precioPizza.textContent = element.precio;

      tr.appendChild(nombrePizza);
      tr.appendChild(precioPizza);
    });
  };

  tablaPizzas();

  const ingredientesPizza = (num) => {
  
    const divIngredientes = document.getElementById("ingredientes");

    for (let y = 0; y < datosPizza[num].ingredientes.length; y++) {
      let ingredientes = document.createElement("p");

      ingredientes.textContent = datosPizza[num].ingredientes[y];

      console.log(datosPizza[num].ingredientes[y]);

      divIngredientes.appendChild(ingredientes);
    }
  };

  for (let z = 0; z < datosPizza.length; z++) {
    if (parseInt(idCliente) === datosPizza[z].identificador) {
      ingredientesPizza(z);
      break;
    }
  }

  if (parseInt(idCliente) > datosPizza.length) {
    alert("no hay ingredientes para la pizza de este cliente");
  }
});
