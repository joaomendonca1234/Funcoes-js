const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Quanto é 7x8" [
            {
                texto: "56".,
                afirmacao: "Parabens,voce acerto!!!. "
            },
            {
                texto: "48",
                afirmacao: " ERROUU!!!!!."
            }
        ]
    },
    {
        enunciado: "9x15" [
            {
                texto: "135.",
                afirmacao: "Parabens, voce é otimo."
            },
            {
                texto: " 225.",
                afirmacao: " Voce pode melhorar."
            }
        ]
    },
    {
        enunciado: "85x7": [
            {
                texto: "595.",
                afirmacao: "Parabens, voce é otimo."
            },
            {
                texto: "980",
                afirmacao: "Procure melhorar."
            }
        ]
    },
    {
        enunciado: "577x8",
        alternativas: [
            {
                texto: "4.616.",
                afirmacao: "Aertou, parabens."
            },
            {
                texto: "7.890.",
                afirmacao: "Errou, voce pode melhorar!"
            }
        ]
    },
    {
        enunciado: "90/5: [
            {
                texto: "18.",
                afirmacao: "Acertou, parabens."
            },
            {
                texto: "22.",
                afirmacao: "Procure melhorar. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const altPercebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado finalernativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
