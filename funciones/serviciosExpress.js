//arreglo d tarjetas de servicio express
const serviciosExpress = [
    {
        id:1,
        nombre: "Cimentacion Profunda",
        Categoria: "Estructura",
        imagen: "img/serviciosExpress/cimentacion.jpg",
        descripcion: "Evaluacion tecnica y refuerso estructural para grietas criticas en la base de tu construccion",
        tiempo: "2 a 5 dias",
        precio: "Desde $5,000 MXM", 
    },

    {
        id:2,
        nombre: "Remodelacion de Interiores",
        Categoria: "acabados",
        imagen: "img/serviciosExpresS/remodelacion.jpg",
        descripcion: "Evaluacion tecnica y refuerso estructural para grietas criticas en la base de tu construccion",
        tiempo: "2 a 5 dias",
        precio: "Desde $5,000 MXM", 
    },

    {
        id:3,
        nombre: "Diseño de Planos #D",
        Categoria: "arquitectura",
        imagen: "../img/serviciosExpress/planos.jpg",
        descripcion: "Creacion de Planos para visualizar tu proyecto antes de construirlo",
        tiempo: "2 a 5 dias",
        precio: "Desde $3,000 MXM", 
    },

    {
    id:4,
    nombre: "Instalacion Electrica",
    categoria: "Instalaciones",
    imagen: "img/serviciosExpress/electrica.jpg",
    descripcion: "Instalacion electrica segura y eficiente para tu hogar o negocio, cumpliendo con los estandares",
    tiempo: "1-3 dias",
    precio: "Desde $5,000 MXN"
},

{
    id:5,
    nombre: "Pintura y acabados",
    categoria: "Acabados",
    imagen: "img/serviciosExpress/pintura.jpg",
    descripcion: "Servicio de pintura profesional para interiores y exteriores, con acabados duraderos y de alta",
    tiempo: "2-4 dias",
    precio: "Desde $3,000 MXN"
},

{
    id:6,
    nombre: "Reparacion de techos",
    categoria: "Estructura",
    imagen: "img/serviciosExpress/techos.jpg",
    descripcion: "Transforma tus espacios con acabados modernos y funcionales, adaptados a tu estilo de vida",
    tiempo: "3-7 dias",
    precio: "Desde $10,000 MXN"
}



];

//Funcion pa mostrar servicios(tarjetas)
function verDetalles(id){
    const servicio = serviciosExpress.find(s => s.id === id);
    const modal = document.getElementById('modalServicio');
    const contenido = document.getElementById('modal-body-content');

    contenido.innerHTML = `
        <img src="${servicio.imagen}" class="modal-detalle-img"}>
        <h2>${servicio.nombre}</h2>
        <p style="color: #f39c12; font-weight: bold;">${servicio.categoria}</p>
        <hr>
        <p style="margin: 20px 0; line-height: 1.6;">${servicio.descripcion}</p>
        <div class="modal-info-extra">
            <span><strong>⏱ Tiempo: </strong>${servicio.tiempo}</span>
            <span><strong>⏲️ Precio: </strong>${servicio.precio}</span>
        </div>
    `;

    modal.style.display = 'block';
}

// Inicializamos los servicios
mostrarServicios(serviciosExpress);

// configuracion del filtro
const btnFiltrar = document.getElementById('btnFiltrar');
const inputBusqueda = document.getElementById('inputBusqueda');

const filtrarServicios = () => {
    const termino = inputBusqueda.value.toLowerCase();
    const filtrados = serviciosExpress.filter(s => s.nombre.toLowerCase().includes(termino) || s.categoria.toLowerCase().includes(termino));
    mostrarServicios(filtrados);
};

if(btnFiltrar) btnFiltrar.addEventListener('click', filtrarServicios);
if(inputBusqueda) inputBusqueda.addEventListener('keypress', (e) => {if (e.key === 'Enter') filtrarServicios();});

//Eventos para cerrar el modal
const closeBtn = document.getElementById('.close-btn');
if(closeBtn) closeBtn.onclick = () => document.getElementById('modalServicio').style.display = 'none';

window.addEventListener('click', (event) => {
    const modal = document.getElementById('modalServicio');
    if (modal && event.target === modal) modal.style.display = 'none';
});