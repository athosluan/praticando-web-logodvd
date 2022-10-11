const buton = document.querySelector('.btn');
const dvd = document.querySelector('.dvd');

let positionBottom = parseInt(getComputedStyle(dvd).bottom.replace('px', ''));
let positionLeft = parseInt(getComputedStyle(dvd).left.replace('px', ''));

let direcao = 'CimaEsquerda';

let tamanhoPuloPosicao = 3;

function DadosTopRightBottomLeft() {
    let positionTop = dvd.offsetTop;
    let positionRight = getComputedStyle(dvd).right.replace('px', '');

    document.querySelector('.top').innerHTML = positionTop;
    document.querySelector('.right').innerHTML = positionRight;
    document.querySelector('.bottom').innerHTML = positionBottom;
    document.querySelector('.left').innerHTML = positionLeft;

}

const Posicionar = () => {

    let positionTop = dvd.offsetTop;
    let positionRight = getComputedStyle(dvd).right.replace('px', '');


    direcao = (positionTop <= tamanhoPuloPosicao && direcao == 'CimaDireita') ? 'BaixoDireita' : direcao;

    direcao = (positionTop <= tamanhoPuloPosicao && direcao == 'CimaEsquerda') ? 'BaixoEsquerda' : direcao;

    direcao = (positionRight <= tamanhoPuloPosicao && direcao == 'BaixoDireita') ? 'BaixoEsquerda' : direcao;

    direcao = (positionRight <= tamanhoPuloPosicao && direcao == 'CimaDireita') ? 'CimaEsquerda' : direcao;

    direcao = (positionBottom <= tamanhoPuloPosicao && direcao == 'BaixoDireita') ? 'CimaDireita' : direcao;

    direcao = (positionBottom <= tamanhoPuloPosicao && direcao == 'BaixoEsquerda') ? 'CimaEsquerda' : direcao;

    direcao = (positionLeft <= tamanhoPuloPosicao && direcao == 'BaixoEsquerda') ? 'BaixoDireita' : direcao;

    direcao = (positionLeft <= tamanhoPuloPosicao && direcao == 'CimaEsquerda') ? 'CimaDireita' : direcao;

    switch (direcao) {
        case 'BaixoDireita':
            positionBottom -= tamanhoPuloPosicao;
            positionLeft += tamanhoPuloPosicao;
            break;
        case 'BaixoEsquerda':
            positionBottom -= tamanhoPuloPosicao;
            positionLeft -= tamanhoPuloPosicao;
            break;

        case 'CimaEsquerda':
            positionBottom += tamanhoPuloPosicao;
            positionLeft -= tamanhoPuloPosicao;
            break;

        case 'CimaDireita':
            positionBottom += tamanhoPuloPosicao;
            positionLeft += tamanhoPuloPosicao;
            break;

        default:
            break;
    }

    dvd.style.bottom = `${positionBottom}px`;
    dvd.style.left = `${positionLeft}px`;

    DadosTopRightBottomLeft();

}


let iniciado = false;
let Tempo;
function Start() {
    if (!iniciado) {
        Tempo = setInterval(() => {
            Posicionar();
        }, 20);
        buton.textContent = "Parar";
        iniciado = !iniciado;
    }
    else {
        clearInterval(Tempo);
        buton.textContent = "Iniciar";
        iniciado = !iniciado;
    }

}


buton.onclick = Start;