// funcion pa mover el carruceñ con las flechas (movimininento en la pagina)

function moveSlide(trackId, dotsId, direction) {
    const track = document.getElementById(trackId); 
    
    //si no hay carrusel en esta página detenemos la función 
    if (!track) return; 

    // busca tods imágenes dentro de carrusel
    const slides = track.querySelectorAll('.carousel-slide'); 
    //busca el contenedor de puntos de navegacion
    const dotsContainer = document.getElementById(dotsId); 
    // busca puntos dentro de contenedo
    const dots = dotsContainer.querySelectorAll('.dot'); 

    // esta variable ncuentra la imagen actual hace lista de un arreglo y busca su posicio con la clase -active- 
    let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

    // oculta imagen y desactiva o vacia el puntito actual
    slides[activeIndex].classList.remove('active');
    dots[activeIndex].classList.remove('active');

    //calcula la nueva posición
    let newIndex = activeIndex + direction;
    if (newIndex >= slides.length) newIndex = 0; 
    if (newIndex < 0) newIndex = slides.length - 1; 
    // muestra nueva imagen y activa el puntito
    slides[newIndex].classList.add('active');
    dots[newIndex].classList.add('active');
}

//cambia imagen automáticamente 5s
setInterval(() => {
    moveSlide('track1', 'dots1', 1);
    moveSlide('track2', 'dots2', 1);
}, 3000); 