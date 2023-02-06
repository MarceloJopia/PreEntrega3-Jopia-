// FILTRAR CATEGORIAS
// AGREGAR AL CARRITO Y RECORDAR
// PRODUCTOS DESDE EL JS Y NO DESDE EL HTML
// CALCULADORA DE PRECIO TOTAL (EN CARRITO)

// EVENTOS
// DOM
// STORAGE - JSON

const productos = [
    {nombre: "Nintendo Switch", valor: 300000, stock: 17, id: "1", categoria:["nintendo","consola"]},
    {nombre: "Playstation 5", valor: 800000, stock: 15 , id: "2", categoria:["ps","consola"]},
    {nombre: "Xbox Series X", valor: 550000, stock: 12 , id: "3", categoria:["xbox","consola"]},
    {nombre: "Pokemon Escarlata", valor: 55000, stock: 7, id: "4", categoria:["nintendo"]},
    {nombre: "Mario Party", valor: 55000, stock: 22, id: "5", categoria:["nintendo"]},
    {nombre: "God of War Ragnarok (PS5)", valor: 65000, stock: 13, id: "6", categoria:["consola"]},
    {nombre: "Halo Infinite (XBOX)", valor: 50000, stock: 3, id: "7", categoria:["xbox"]},
    {nombre: "Switch Controller (Control Nintendo)", valor: 90000, stock: 29, id: "8", categoria:["nintendo","otros"]},
    {nombre: "Control Xbox", valor: 35000, stock: 24, id: "9", categoria:["xbox","otros"]},
    {nombre: "Elden Ring (PC)", valor: 45000, stock: 7, id: "10", categoria:["pc"]},
    {nombre: "Elden Ring (PS5)", valor: 55000, stock: 10, id: "11", categoria:["ps"]},
    {nombre: "Catan - El Juego", valor: 25000, stock: 15, id: "12", categoria:["mesa"]}
]

const catalogo = document.querySelector(".catalogo")
for (let cardProducto of productos){
    const nombreProducto = document.createElement("p")
    const stockProducto = document.createElement("p")
    const precioProducto = document.createElement("p")
    const btnAgregarCarrito = document.createElement("button")
    const card = document.createElement("div")
    card.classList.add("card")
    nombreProducto.innerHTML = cardProducto.nombre
    stockProducto.innerHTML = "Stock Disponible: "+cardProducto.stock
    precioProducto.innerHTML = "Precio: "+cardProducto.valor+" CLP"
    btnAgregarCarrito.innerHTML = "<b>Agregar</b>"
    btnAgregarCarrito.className = "anadirCarrito"
    card.appendChild(nombreProducto)
    card.appendChild(stockProducto)
    card.appendChild(precioProducto)
    card.appendChild(btnAgregarCarrito)
    catalogo.appendChild(card)
}










if (document.getElementById('checkbox1').checked)
{
alert('checkbox1 esta seleccionado')
console.log("intento 3");
}


var isChecked = document.getElementById('checkbox1').checked;
if(isChecked) {
  alert('checkbox esta seleccionado')
  console.log("intento2");
}

check()
uncheck()
function check() {
    document.getElementById("checkbox1").checked == true;
    console.log("true")
}

function uncheck() {
    let check = document.getElementById("checkbox1").checked;
    if (check == false){
    console.log("false")}
}

const checkboxOn =  document.getElementsByClassName('checkboxFiltros').checked
let checkbox = document.getElementById('checkbox1');
checkbox.onchange = () => {console.log(HTMLInputElement.checked)

}



function validaCheckbox(){
  let checked = checkbox.checked;
  if(checked){
    alert('checkbox1 esta seleccionado');
  }
}

function checkFiltro(filtroSeleccionado){
    const checkboxOn =  document.getElementsByClassName(filtroSeleccionado).checked
    if (checkboxOn == asd) {
        const catalogoFiltrado = document.querySelector('.catalogo')
        for (let cardProducto of productos){
            const nombreProducto = document.createElement("p")
            const stockProducto = document.createElement("p")
            const precioProducto = document.createElement("p")
            const btnAgregarCarrito = document.createElement("button")
            const card = document.createElement("div")
            card.classList.add("card")
            nombreProducto.innerHTML = cardProducto.nombre
            stockProducto.innerHTML = "Stock Disponible: "+cardProducto.stock
            precioProducto.innerHTML = "Precio: "+cardProducto.valor+" CLP"
            btnAgregarCarrito.innerHTML = "<b>Agregar</b>"
            btnAgregarCarrito.className = "anadirCarrito"
            card.appendChild(nombreProducto)
            card.appendChild(stockProducto)
            card.appendChild(precioProducto)
            card.appendChild(btnAgregarCarrito)
            catalogo.appendChild(card)
        }
    }
    else {
        const catalogo = document.querySelector(".catalogo")
        for (let cardProducto of productos){
            const nombreProducto = document.createElement("p")
            const stockProducto = document.createElement("p")
            const precioProducto = document.createElement("p")
            const btnAgregarCarrito = document.createElement("button")
            const card = document.createElement("div")
            card.classList.add("card")
            nombreProducto.innerHTML = cardProducto.nombre
            stockProducto.innerHTML = "Stock Disponible: "+cardProducto.stock
            precioProducto.innerHTML = "Precio: "+cardProducto.valor+" CLP"
            btnAgregarCarrito.innerHTML = "<b>Agregar</b>"
            btnAgregarCarrito.className = "anadirCarrito"
            card.appendChild(nombreProducto)
            card.appendChild(stockProducto)
            card.appendChild(precioProducto)
            card.appendChild(btnAgregarCarrito)
            catalogo.appendChild(card)
        }
    }
}






function checkFiltro(idFiltroSeleccionado){
    if (document.getElementById(idFiltroSeleccionado).checked) {
        console.log("checkeado")
    }
    else {
        // asd
        console.log("caca")
    }
}