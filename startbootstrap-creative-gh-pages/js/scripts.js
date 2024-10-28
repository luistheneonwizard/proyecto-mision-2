let listaUsuarios = []
function verify() {
    listaUsuarios = JSON.parse(localStorage.getItem("usuario"))
}


function registrarse() {
    let nombre = document.getElementById("exampleFirstName").value
    let apellido = document.getElementById("exampleLastName").value
    let email = document.getElementById("exampleInputEmail").value
    let password = document.getElementById("exampleInputPassword").value
    let repassword = document.getElementById("exampleRepeatPassword").value


    console.log(nombre)
    if (nombre == "") (
        alert("debe ingresar un nombre")
    )

    if (apellido == "") (
        alert("debe ingresar un apellido")
    )

    if (email == "") (
        alert("debe ingresar un email")
    )

    if (password == "") (
        alert("debe ingresar un password")
    )

    if (password != repassword) (
        alert("las contraseñas deben ser iguales")
    )

    let persona = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: repassword,
    }

    let usuario = JSON.stringify(persona)

    listaUsuarios.push(usuario);

    localStorage.setItem("usuario", JSON.stringify(listaUsuarios));
    alert("usuario registrado")

}


function ingresar() {
    //console.log(listaUsuarios)
}


function verificarlogin() {
    let listaUsuarios1 = JSON.parse(localStorage.getItem("usuario"))
    let email = document.getElementById("exampleInputEmail").evalue
    let password = document.getElementById("exampleInputPassword").evalue

    for (let i = 0; i < listaUsuarios.length; i++) {
        //consule.log(listaUsuarios[i].nombre)
        let usuario = JSON.parse(listaUsuarios1[i])
        console.log(usuario.email)
        if (email == usuario.email && usuario.password) {
            alert(" el usuario ingreso correctamente")
        }
    }

    if (legado) {
        window.location.href = "index.html"
    } else {
        alert("el usuario o clave incorrecta")
          }
}


function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
}

function agregarAlCarrito() {
    const productoInput = document.getElementById('productoInput');
    const productoNombre = productoInput.value.trim();

    if (productoNombre) {
        const carrito = cargarCarrito();
        carrito.push({ nombre: productoNombre });
        guardarCarrito(carrito);
        productoInput.value = 'Max'; // Limpiar el input
        
    } else {
        alert('Max');
    }

}
    



function vaciarCarrito() {
    localStorage.removeItem('carrito');
    
}
