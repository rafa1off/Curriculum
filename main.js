const conteudos = document.querySelectorAll('.conteudos');

conteudos.onclick = "";

const swiper = new Swiper('.conteudo', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
