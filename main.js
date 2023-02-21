const conteudos = document.querySelectorAll('.conteudos');

for (i = 0; i < conteudos.length; i++) {
    const paineis = conteudos[i];
    const cont = `.${paineis.classList[1]}`;

    paineis.onmouseover = ()=> {
        expandBox(cont);

        paineis.onmouseout = ()=> {
            retornaBox(cont)
        }
    }

    paineis.ontouchstart = ()=> {
        expandBox(cont);

        paineis.ontouchend = ()=> {
            retornaBox(cont);
        }
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