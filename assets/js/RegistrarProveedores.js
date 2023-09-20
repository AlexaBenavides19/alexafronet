const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})




//DAGUFF EN KICK

document.addEventListener("DOMContentLoaded", function () {
    const productForm = document.getElementById("product-form");
    
    const addButton = productForm.querySelector(".register-button");
    const cancelButton = productForm.querySelector(".cancel-button");
  
    addButton.addEventListener("click", function (event) {
      event.preventDefault();
      
      Swal.fire({
        title: "Proveedor agregado ",
        text: "El proveedor ha sido registrada exitosamente.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      });
      
      setTimeout(function () {
        window.location.href = "/assets/pages/proveedoreAdmin.html";
      }, 1500);
    });
  
    cancelButton.addEventListener("click", function (event) {
      event.preventDefault();
      
      Swal.fire({
        title: "Cancelar",
        text: "¿Estás seguro de que quieres cancelar el registro?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, cancelar",
        cancelButtonText: "No, volver"
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/assets/pages/proveedoreAdmin.html";
        }
      });
    });
  });

  // Función para mostrar una alerta antes de redirigir
function confirmNavigation(url) {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "Es posible que no se guarden los cambios.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, continuar",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = url;
    }
  });
}

// Asignar la función a los enlaces
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("#sidebar a");
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const url = link.getAttribute("href");
      confirmNavigation(url);
    });
  });
});


document.getElementById("miFormulario").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que el formulario se envíe de forma tradicional

  // Captura los valores de los campos del formulario
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;
  const direccion = document.getElementById("direccion").value;
  const descripcion = document.getElementById("descripcion").value;
  const categoria = document.getElementById("categoria").value;

  // Crea un objeto con los datos a enviar
  const data = {
      "nombre": nombre,
      "telefono":telefono,
      "correo": correo,
      "direccion": direccion,
      "descripcion" : descripcion,
      "categoria": categoria
  };

  // Realiza la solicitud POST a la API
  fetch("https://apinueva-uztn.onrender.com/api/proveedor", {
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

    


