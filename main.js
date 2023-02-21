const conteudos = document.querySelectorAll('.conteudos');

for (i = 0; i < conteudos.length; i++) {
    const cont = conteudos[i];
    const cont1 = cont.classList[1];
    const cont2 = `.${cont1}`;

    cont.onmouseover = function () {
        expandBox(cont2);        
    }

    cont.onmouseout = function () {
        retornaBox(cont2)
    }
}

function expandBox(divConteudo) {
    const container = document.querySelector(divConteudo)
    console.log(container)
    container.classList.add('conteudos-hover')    
}

function retornaBox(divConteudo) {
    const container = document.querySelector(divConteudo)
    console.log(container)
    container.classList.remove('conteudos-hover')
}