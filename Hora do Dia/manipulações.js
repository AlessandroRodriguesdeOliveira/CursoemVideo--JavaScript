//pegar a hor do sistema e os elementos da DOM.
var agora = new Date();
var horario = agora.getHours();
var texto = document.getElementById('texto');
var image = document.getElementById('imga');

//de acordo com a hora o background-color muda e também a imagem e texto.
if (5 < horario && horario < 12) {
    image.src = 'manhã.png';
    texto.innerText = `Agora são ${horario} horas.`;
    document.body.style.backgroundColor = 'rgb(225, 225, 180)';

        
} else if (11 < horario && horario < 18){
    image.src = 'tarde.png';
    texto.innerText = `Agora são ${horario} horas.`;
    document.body.style.backgroundColor = 'rgb(234, 168, 124)';

} else {
    image.src = 'noite.png';
    texto.innerText = `Agora são ${horario} horas.`;
    document.body.style.backgroundColor = 'rgb(49, 49, 66)';

}

