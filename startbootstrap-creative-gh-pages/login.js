function login() {
    //console.log(listaUsuarios)
}

function verificarlogin() {
    let listaUsuarios = JSON.parse(localStorage.getItem("usuario"))
    let email = document.getElementById("exampleInputEmail").evalue
    let password = document.getElementById("exampleInputPassword").evalue

    for (let i = 0; i < listaUsuarios.length; i++) {
        //consule.log(listaUsuarios[i].nombre)
        let usuario = JSON.parse(listaUsuarios[i])
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