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