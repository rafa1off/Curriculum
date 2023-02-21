const conteudos = document.querySelectorAll('.conteudos');

for (i = 0; i < conteudos.length; i++) {
    const cont = conteudos[i];
    const cont1 = cont.classList[1];
    const cont2 = `.${cont1}`;

    cont.onmouseover = ()=> {
        expandBox(cont2);

        cont.onmouseout = ()=> {
            retornaBox(cont2)
        }
    }

    cont.ontouchstart = ()=> {
        expandBox(cont2);
        
        setTimeout(() => {
            retornaBox(cont2)
        }, 600)
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