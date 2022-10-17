const usuario = "usuario123";
const contrasenia = "contraseña123";

function ingresoDatos(){

    let user = prompt("Ingrese usuario");
    let pass = prompt("Ingrese contraseña");

    if (validarDatos (user,pass)){
        iniciarCarrito();
    }else{
        alert("Usuario y/o contraseña incorrecta");
    }
    
}
function validarDatos(user,pass){
    if (user === usuario && pass === contrasenia){
        return true; 
    }else {
        return false;
    }
}

let productoIngresado = confirm ("Quiere agregar un producto?");
const productos = [];

function iniciarCarrito (){
    let nombreProducto = prompt ("Ingrese el nombre del producto");
    productos.push(nombreProducto);
    console.log(productos);
}

function eliminarProducto(){
    const productoEliminado = prompt("Qué producto querés eliminar?");
    const existeProducto = productos.includes(productoEliminado);

    if (existeProducto){
        const indexProducto= productos.indexOf(productoEliminado);
        productos.splice(indexProducto,1)
    }else{
        alert("Ese producto no existe");
    }
}

while (productoIngresado){
    iniciarCarrito();
    productoIngresado = confirm ("Quiere agregar otro producto?");
}

let confirmEliminar = confirm ("Quiere eliminar un producto del carrito?");

while (confirmEliminar){
    eliminarProducto();
    confirmEliminar = confirm ("Quiere eliminar otro producto?");
}
