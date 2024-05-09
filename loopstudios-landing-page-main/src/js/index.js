const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuMobile = document.querySelector('.menu-mobile');
const fecharMenuMobile = document.querySelector('.fechar-menu-mobile');

menuHamburguer.addEventListener('click', function () {
    menuMobile.classList.add('aberto');
    document.body.style.overflow = 'hidden';
});

fecharMenuMobile.addEventListener('click', function () {
    menuMobile.classList.remove('aberto');
    document.body.style.overflow = '';
});