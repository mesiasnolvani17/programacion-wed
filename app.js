// Obtener el elemento del encabezado
const headerMenu = document.querySelector('.hm-header');

// Imprimir la posición vertical del encabezado con respecto al documento
console.log(headerMenu.offsetTop);

// Agregar un evento de desplazamiento (scroll) a la ventana
window.addEventListener('scroll', () => {
    // Verificar si el desplazamiento vertical es mayor a 80 píxeles
    if (window.pageYOffset > 80) {
        // Agregar una clase al encabezado para fijarlo
        headerMenu.classList.add('header-fixed');
    } else {
        // Quitar la clase de encabezado fijo si el desplazamiento es menor o igual a 80 píxeles
        headerMenu.classList.remove('header-fixed');
    }
});
// Verificar si hay elementos con la clase 'hm-tabs'
if (document.querySelector('.hm-tabs')) {

    // Obtener todos los enlaces de las pestañas
    const tabLinks = document.querySelectorAll('.hm-tab-link');
    // Obtener todos los contenidos de las pestañas
    const tabsContent = document.querySelectorAll('.tabs-content');

    // Agregar la clase 'active' al primer enlace de pestaña
    tabLinks[0].classList.add('active');

    // Verificar si hay elementos con la clase 'tabs-content'
    if (document.querySelector('.tabs-content')) {
        // Agregar la clase 'tab-active' al primer contenido de pestaña
        tabsContent[0].classList.add('tab-active');
    }

    // Iterar sobre todos los enlaces de pestañas
    for (let i = 0; i < tabLinks.length; i++) {

        // Agregar un event listener para el clic en el enlace de la pestaña
        tabLinks[i].addEventListener('click', () => {

            // Quitar la clase 'active' de todos los enlaces de pestañas
            tabLinks.forEach((tab) => tab.classList.remove('active'));
            // Agregar la clase 'active' al enlace de pestaña clicado
            tabLinks[i].classList.add('active');

            // Quitar la clase 'tab-active' de todos los contenidos de pestañas
            tabsContent.forEach((tabCont) => tabCont.classList.remove('tab-active'));
            // Agregar la clase 'tab-active' al contenido de pestaña correspondiente
            tabsContent[i].classList.add('tab-active');

        });

    }
}

// Obtener el botón de menú
const menu = document.querySelector('.icon-menu');
// Obtener el botón de cerrar menú
const menuClose = document.querySelector('.cerrar-menu');

// Agregar un event listener para el clic en el botón de menú
menu.addEventListener('click', () => {
    // Agregar la clase 'active' al menú móvil
    document.querySelector('.header-menu-movil').classList.add('active');
});

// Agregar un event listener para el clic en el botón de cerrar menú
menuClose.addEventListener('click', () => {
    // Quitar la clase 'active' del menú móvil
    document.querySelector('.header-menu-movil').classList.remove('active');
});
