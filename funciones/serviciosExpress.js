//arreglo d tarjetas de servicio express
const serviciosExpress = [
    {
    id:1,
    nombre: "Cimentacion Profunda",
    categoria: "Estructura",
    imagen: "img/serviciosExpress/cimentacion.jpg",
    descripcion: "Evaluacion tecnica y refuerso estructural para grietas criticas en la base de tu construccion",
    tiempo: "2 a 5 dias",
   precio: "Desde $5,000 MXM", 
    },

    {
    id:2,
    nombre: "Remodelacion de Interiores",
     categoria: "Acabados",
    imagen: "img/serviciosExpress/remodelacion.jpg",
    descripcion: "Evaluacion tecnica y refuerso estructural para grietas criticas en la base de tu construccion",
    tiempo: "2 a 5 dias",
    precio: "Desde $5,000 MXM", 
    },

    {
     id:3,
    nombre: "Diseño de Planos 3D",
    categoria: "Arquitectura",
    imagen: "img/serviciosExpress/planos.jpg",
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
    },

    {
    id:7,
    nombre: "Impermeabilizacion",
    categoria: "Mantenimiento",
    imagen: "img/serviciosExpress/7.jpg",
    descripcion: "Proteccion para techos y paredes contra humedad y filtraciones",
    tiempo: "1-2 dias",
    precio: "Desde $2,500 MXN"
},

{
    id:8,
    nombre: "Colocacion de Piso",
    categoria: "Acabados",
    imagen: "img/serviciosExpress/8.jpg",
    descripcion: "Instalacion de piso ceramico y otros materiales para interiores",
    tiempo: "2-4 dias",
    precio: "Desde $4,000 MXN"
},

{
    id:9,
    nombre: "Ampliacion de Cuartos",
    categoria: "Construccion",
    imagen: "img/serviciosExpress/9.jpg",
    descripcion: "Construccion de espacios adicionales para tu hogar",
    tiempo: "5-10 dias",
    precio: "Desde $15,000 MXN"
},

{
    id:10,
    nombre: "Instalacion Hidraulica",
    categoria: "Instalaciones",
    imagen: "img/serviciosExpress/10.jpg",
    descripcion: "Reparacion e instalacion de tuberias y conexiones de agua",
    tiempo: "1-3 dias",
    precio: "Desde $3,500 MXN"
},

{
    id:11,
    nombre: "Construccion de Bardas",
    categoria: "Estructura",
    imagen: "img/serviciosExpress/11.jpg",
    descripcion: "Levantamiento de bardas y muros para terrenos y casas",
    tiempo: "3-6 dias",
    precio: "Desde $6,000 MXN"
},

{
    id:12,
    nombre: "Instalacion de Ventanas",
    categoria: "Acabados",
    imagen: "img/serviciosExpress/12.jpg",
    descripcion: "Colocacion de ventanas modernas y resistentes",
    tiempo: "1-2 dias",
    precio: "Desde $2,000 MXN"
},

{
    id:13,
    nombre: "Demolicion Ligera",
    categoria: "Construccion",
    imagen: "img/serviciosExpress/13.jpg",
    descripcion: "Retiro de muros y estructuras pequeñas de forma segura",
    tiempo: "1-3 dias",
    precio: "Desde $4,500 MXN"
},

{
    id:14,
    nombre: "Diseño de Fachadas",
    categoria: "Arquitectura",
    imagen: "img/serviciosExpress/14.jpg",
    descripcion: "Propuestas visuales modernas para renovar exteriores",
    tiempo: "2-5 dias",
    precio: "Desde $3,000 MXN"
},

{
    id:15,
    nombre: "Instalacion de Puertas",
    categoria: "Acabados",
    imagen: "img/serviciosExpress/15.jpg",
    descripcion: "Colocacion de puertas para interiores y exteriores",
    tiempo: "1-2 dias",
    precio: "Desde $2,500 MXN"
},

{
    id:16,
    nombre: "Mantenimiento General",
    categoria: "Mantenimiento",
    imagen: "img/serviciosExpress/16.jpg",
    descripcion: "Servicio general para reparar detalles en viviendas y oficinas",
    tiempo: "1-4 dias",
    precio: "Desde $2,000 MXN"
},

{
    id:17,
    nombre: "Construccion de Cochera",
    categoria: "Construccion",
    imagen: "img/serviciosExpress/17.jpg",
    descripcion: "Espacios seguros para estacionamiento de vehiculos",
    tiempo: "4-8 dias",
    precio: "Desde $12,000 MXN"
},

{
    id:18,
    nombre: "Reparacion de Muros",
    categoria: "Estructura",
    imagen: "img/serviciosExpress/18.jpg",
    descripcion: "Correccion de grietas y daños en paredes y muros",
    tiempo: "2-3 dias",
    precio: "Desde $3,500 MXN"
},

{
    id:19,
    nombre: "Instalacion de Azulejos",
    categoria: "Acabados",
    imagen: "img/serviciosExpress/19.jpg",
    descripcion: "Colocacion de azulejos para baños y cocinas",
    tiempo: "2-4 dias",
    precio: "Desde $4,000 MXN"
},

{
    id:20,
    nombre: "Limpieza de Obra",
    categoria: "Mantenimiento",
    imagen: "img/serviciosExpress/20.jpg",
    descripcion: "Limpieza final despues de trabajos de construccion o remodelacion",
    tiempo: "1-2 dias",
    precio: "Desde $1,500 MXN"
}
];

//Funcion pa mostrar servicios(tarjetas)
function mostrarServicios(listaServicios){
    const contenedor = document.getElementById('contenedor-grid');
    contenedor.innerHTML = '';

    listaServicios.forEach(servicio => {
        contenedor.innerHTML += `
            <div class="servicio-card">
                <img src="${servicio.imagen}" alt="${servicio.nombre}">
                <h3>${servicio.nombre}</h3>
                <p>${servicio.categoria}</p>
                <button class="cta-button" onclick="verDetalles(${servicio.id})">Ver detalles</button>
            </div>
        `;
    });
}

//Funcion para mostrar los detalles de cada servicio
function verDetalles(id){
    const servicio = serviciosExpress.find(s => s.id === id);
    const modal = document.getElementById('modalServicio');
    const contenido = document.getElementById('modal-body-content');

    contenido.innerHTML = `
        <img src="${servicio.imagen}" class="modal-detalle-img">
        <h2>${servicio.nombre}</h2>
        <p style="color: #f39c12; font-weight: bold;">${servicio.categoria}</p>
        <hr>
        <p style="margin: 20px 0; line-height: 1.6;">${servicio.descripcion}</p>
        <div class="modal-info-extra">
            <span><strong>⏲️ Tiempo: </strong>${servicio.tiempo}</span>
            <span><strong>💲 Precio: </strong>${servicio.precio}</span>
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
const closeBtn = document.querySelector('.close-btn');
if(closeBtn) closeBtn.onclick = () => document.getElementById('modalServicio').style.display = 'none';

window.addEventListener('click', (event) => {
    const modal = document.getElementById('modalServicio');
    if (modal && event.target === modal) modal.style.display = 'none';
});