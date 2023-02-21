const conteudos = document.querySelectorAll('.conteudos');

for (i = 0; i < conteudos.length; i++) {
    const cont = `.${conteudos[i].classList[1]}`;

    conteudos[i].onmouseover = ()=> {
        expandBox(cont);        
    }

    conteudos[i].onmouseout = ()=> {
        retornaBox(cont)
    }

    conteudos[i].ontouchstart = ()=> {
        expandBox(cont);
    }

    conteudos[i].ontouchend = ()=> {
        retornaBox(cont);
    }
}

function expandBox(divConteudo) {
    const container = document.querySelector(divConteudo)
    container.classList.add('conteudos-hover')
}

function retornaBox(divConteudo) {
    const container = document.querySelector(divConteudo)
    container.classList.remove('conteudos-hover')
}