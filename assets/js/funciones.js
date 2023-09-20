//const url = 'https://backendapi-2t9z.onrender.com/api/usuarios'
const url = 'https://apinueva-uztn.onrender.com/api/proveedor'

const listarProveedores = async() => {
    let respuesta = ''
    let body = document.getElementById('contenido')
    //url: Es la url de la api.
    //Al deslpegarla en el servidor colocar la api del servidor
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

const registrar = async()=>{
    let _nombre = document.getElementById('nombre').value
    let _telefono = document.getElementById('telefono').value
    let _correo = document.getElementById('correo').value
    let _direccion = document.getElementById('direccion').value
    let _tipodeproducto = document.getElementById('tipodeproducto').value
    let _descripcion = document.getElementById('descripcion').value
    let _estado = document.getElementById('estado').value
    if (
        nombre === '' ||
        telefono === '' ||
        correo === '' ||
        direccion === '' ||
        tipoDeProducto === '' ||
        descripcion === '' ||
        estado === ''
      ){
        let proveedor = {
            nombre:_nombre,
            telefono: _telefono,
            correo:_correo,
            direccion:_direccion,
            tipodeproducto:_tipodeproducto,
            descripcion:_descripcion,
            estado:_estado
        }

        fetch(url,  {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(proveedor),//Convertir el objeto _usuario  a un JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
        .then(json => {
            //alert(json.msg)//Mensaje que retorna la API
            console.log(json)
            if(json.msg){
                Swal.fire(
                    json.msg,
                    '',
                    'success'
                )
            }
        })
    }
    else{
        //alert('El password y la confirmación del password no coinciden. Favor corregir.')
        Swal.fire(
            'error'
          )
    }
}

const editar= (usuario)=>{
    document.getElementById('nombre').value = ''
    document.getElementById('telefono').value = ''
    document.getElementById('correo').value = ''
    document.getElementById('direccion').value = ''
    document.getElementById('tipodeproducto').value = ''
    document.getElementById('descripion').value = ''
    document.getElementById('estado').value = ''

    document.getElementById('nombre').value = proveedor.nombre
    document.getElementById('telefono').value = proveedor.telefono
    document.getElementById('correo').value = proveedor.correo
    document.getElementById('direccion').value = proveedor.direccion
    document.getElementById('tipodeproducto').value = proveedor.tipodeproducto
    document.getElementById('descripion').value = proveedor.descripcion
    document.getElementById('estado').value =  proveedor.estado
}

const actualizar = async()=>{
    let _nombre = document.getElementById('nombre').value
    let _telefono = document.getElementById('telefono').value
    let _correo = document.getElementById('correo').value
    let _direccion = document.getElementById('direccion').value
    let _tipodeproducto = document.getElementById('tipodeprocto').value
    let _descripcion = document.getElementById('descripcion').value
    let _estado = document.getElementById('estado').value
    if (
        nombre === '' ||
        telefono === '' ||
        correo === '' ||
        direccion === '' ||
        tipoDeProducto === '' ||
        descripcion === '' ||
        estado === ''
      ){
        let proveedor = {
            nombre:_nombre,
            telefono:_telefono,
            correo:_correo,
            direccion:_direccion,
            tipodeproducto:_tipodeproducto,
            descripcion:_descripcion,
            estado:_estado
        }

        fetch(url,  {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(proveedor),//Convertir el objeto _usuario  a un JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
        .then(json => {
            alert(json.msg)//Mensaje que retorna la API
        })
    }
    else{
        alert('error')
    }
}

const eliminar = (id) =>{
    if(confirm('¿Está seguro de realizar la eliminación') == true){

           let proveedor = {
                _id: id
            }
           fetch(url,  {
                method: 'DELETE',
                mode: 'cors',
                body: JSON.stringify(proveedor),//Convertir el objeto _usuario  a un JSON
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
            .then(json => {
                alert(json.msg)//Mensaje que retorna la API
            }) 
    }
}

if(document.querySelector('#btnRegistrar')){
    document.querySelector('#btnRegistrar')
    .addEventListener('click',registrar)
}

if(document.querySelector('#btnActualizar')){
    document.querySelector('#btnActualizar')
.addEventListener('click',actualizar)
}

