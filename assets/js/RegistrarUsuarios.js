
document.getElementById('miFormulario').addEventListener('submit', function (event) {
    event.preventDefault(); 

   
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

 //! -----------------------------------------------------------------

 //* Api

 document.getElementById("miFormulario").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Captura los valores de los campos del formulario
    const id = document.getElementById("id").value;
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cantidad").value;
    const categoria = document.getElementById("categoria").value;
    const descripcion = document.getElementById("descripcion").value;

    // Crea un objeto con los datos a enviar
    const data = {
        "id" : id,
        "nombre": nombre,
        "precio": precio,
        "cantidad": cantidad,
        "categoria" : categoria,
        "descripcion": descripcion
    };

    // Realiza la solicitud POST a la API
    fetch("https://apifinal19.onrender.com/api/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Respuesta de la API:", data);
    })
    .catch(error => {
        console.error("Error al enviar la solicitud:", error);
    });
});