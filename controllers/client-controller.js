import {clientServices} from "../service/client-service.js"


const crearNuevaLinea = (nombre, email) =>{
    const linea = document.createElement("tr");
    const contenido  = `<td class="td" data-td>${nombre}</td>
                        <td>${email}</td>
                        <td>
                            <ul class="table__button-control">
                                <li>
                                <a href="../screens/editar_cliente.html" class="simple-button simple-button--edit">Editar</a>
                                </li>
                                <li>
                                    <button class="simple-button simple-button--delete" type="button">Eliminar</button>
                                </li>
                            </ul>
                        </td>`;

    linea.innerHTML = contenido;
    return linea;
};

const table = document.querySelector("[data-table]");

// Abrir http. Lo hacemos con la función 'open' que va a recibir 2 parámetros
// El primero va a recibir el método
// El segundo va a recibir una url

// CRUD     // Método
// Create   // POST
// Read     // GET
// Update   // PUT/PATCH
// Delete   // DELETE

clientServices.listaClientes().then((data) =>{
    data.forEach(perfil => {
        table.appendChild(crearNuevaLinea(perfil.nombre, perfil.email))
    });
}).catch((error) => alert('Ocurrió un error'));