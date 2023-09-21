


 function searchTable() {
    const input = document.getElementById("search-input");
    const filter = input.value.toLowerCase();
    const table = document.getElementById("table");
    const rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
      const td = rows[i].getElementsByTagName("td")[1];
      if (td) {
        const textValue = td.textContent || td.innerText;
        if (textValue.toLowerCase().indexOf(filter) > -1) {
          rows[i].style.display = "";
        } else {
          rows[i].style.display = "none";
        }
      }
    }
  }

  
  

  const url = "https://apifinal19.onrender.com/api/productos";

const eliminarproducto = (_id) => {
  return fetch(`${url}/${_id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error al eliminar el usuario en la API');
      }
    });
};
  fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => {
      console.error('Error al obtener los usuarios:', error);
    });

  const mostrarData = (data) =>{
    console.log(data);
    let body = ''
    for (let i = 0; i<data.length; i++){
      body += `<tr id="fila-${data[i]._id}"><td>${data[i].id}</td>
      <td>${data[i].nombre}</td>
      <td>${data[i].precio}</td>
      <td>${data[i].cantidad}</td>
      <td>${data[i].categoria}</td>
      <td>${data[i].descripcion}</td>
      <td>
      <button type="button" class="remove-button" data-id="${data[i]._id}"><i class='bx bxs-trash-alt'></i></button>
      <button type="button" class="edit-button" edit-id="${data[i]._id}"><i class='bx bxs-edit-alt'></i></button>        </td>
      </tr>`;

      
    }
    document.getElementById('table-data').innerHTML = body;
 
  const editButtons = document.querySelectorAll('.edit-button');
  editButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const userObjectId = button.getAttribute('edit-id');
      window.location.href = `EditarUsuarios.html?id=${userObjectId}`;
    });
  });
  
   
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const userObjectId = button.getAttribute('data-id');
  
       
        Swal.fire({
          title: '¿Estás seguro?',
          text: 'Esta acción no se puede deshacer.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sí, eliminar',
          cancelButtonText: 'Cancelar',
        }).then((result) => {
          if (result.isConfirmed) {
            eliminarproducto(userObjectId)
              .then(() => {
              
                const filaAEliminar = document.getElementById(`fila-${userObjectId}`);
                filaAEliminar.remove();
                Swal.fire('Producto eliminado', '', 'success');
              })
              .catch((error) => {
                console.error(error);
                Swal.fire('Error al eliminar', 'Hubo un error al eliminar el usuario.', 'error');
              });
          }
        });
      });
    });

  };

  
