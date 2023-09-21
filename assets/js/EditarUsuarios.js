


document.getElementById('miFormulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario

    var nombre = document.getElementById('nombre').value;
    var precio = document.getElementById('precio').value;
    var cantidad = document.getElementById('cantidad').value;
    var categoria = document.getElementById('categoria').value;
    var descripcion = document.getElementById('descripcion').value;

    if (nombre.trim() !== '' && precio.trim() !== '' && cantidad.trim() !== '' && categoria.trim() !== ''&& descripcion.trim() !== '') {
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¿Quieres guardar el formulario con los datos ingresados?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, guardar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/assets/pages/Usuarios.html';
            }
        });
    } else {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Por favor, completa todos los campos obligatorios.',
            showConfirmButton: false,
            timer: 2000
        });
    }
});


const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

//*API

const api = `https://apifinal19.onrender.com/api/productos/${userId}`

fetch(api)
  .then((response) => response.json())
  .then((data) => mostrarData(data))
  .catch((error) => {
    console.error('Error al obtener los usuarios:', error);
  });

  const mostrarData = (data) =>{
    document.getElementById('id').value = data.id;
    document.getElementById('nombre').value = data.nombre;
    document.getElementById('precio').value = data.precio;
    document.getElementById('cantidad').value = data.cantidad;
    document.getElementById('categoria').value = data.categoria;
    document.getElementById('descripcion').value = data.descripcion;
  }


const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

 
  const id = document.getElementById('id').value
  const nombre = document.getElementById('nombre').value;
  const precio = document.getElementById('precio').value;
  const cantidad = document.getElementById('cantidad').value;
  const categoria = document.getElementById('categoria').value;
  const descripcion = document.getElementById('descripcion').value;


  const datosUsuario = {
    "id": id,
    "nombre": nombre,
    "precio": precio,
    "cantidad": cantidad,
    "categoria" : categoria, 
    "descripcion": descripcion
  };

  fetch(`https://apifinal19.onrender.com/api/productos/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datosUsuario),
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = '/assets/pages/Usuarios.html';
      } else {
        console.error('Error al actualizar los datos del usuario en la API');
      }
    })
    .catch((error) => {
      console.error('Error al actualizar los datos del usuario:', error);
    });
});