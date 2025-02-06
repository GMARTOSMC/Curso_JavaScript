let boton1 = document.getElementById("add");
let lista = document.getElementById("ul");
let texto = document.getElementById("texto");
function addTask(){
    let nuevoItem = document.createElement("li");
    nuevoItem.textContent = texto.value;
    lista.appendChild (nuevoItem);
    borrar(nuevoItem);
}

boton1.addEventListener("click", function(){
    addTask();
});

texto.addEventListener("keypress", function (e) {
    console.log(e.key);
    if (e.key ==='Enter'){
        addTask();
    }
})

function borrar(item) {
    let boton2 = document.createElement("button");
    boton2.textContent = "X";
    boton2.addEventListener("click", function() { 
        item.remove();
    });
    item.appendChild(boton2);
}