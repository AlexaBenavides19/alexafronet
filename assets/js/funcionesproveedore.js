const url= 'https://apinueva-uztn.onrender.com/api/proveedor' 

const listarProveedores = async() =>{
    let respuesta=''
    let body = document.getElementById('contenido')
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
    .then(function(data) {
        let listaUsuarios = data.proveedores //Capturar el array devuelto por la api
        datos = 
        listaUsuarios.map(function(proveedor) {//Recorrer el array
            respuesta += `<tr><td>${proveedor.nombre}</td>`+
            `<td>${proveedor.telefono}</td>`+
            `<td>${proveedor.correo}</td>`+
            `<td>${proveedor.direccion}</td>`+
            `<td>${proveedor.tipodeproducto}</td>`+
            `<td>${proveedor.descripcion}</td>`+
            `<td><a class="waves-effect waves-light btn modal-trigger" href="#modal1" onclick='editar(${JSON.stringify(usuario)})' >Editar</a> <a class="waves-effect waves-light btn modal-danger deep-orange darken-4" href='#' onclick='eliminar("${proveedor._id}")'>Eliminar</a></td>`+
            `</tr>`
            body.innerHTML = respuesta
        })
    })
}
