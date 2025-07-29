const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Depois de uma semana intensa, o que mais te atrai?",
        alternativas: [
            {
                texto: "Um encontro animado com amigos ou uma festa.",
                afirmacao: "Se você marcou mais a: Você provavelmente tem traços mais Extrovertidos. Você se energiza com a interação social e a ação."
            },
            {
                texto: "Um tempo tranquilo em casa, lendo ou assistindo a um filme.",
                afirmacao: "Se você marcou mais b: Você provavelmente tem traços mais Introvertidos. Você se energiza com o tempo sozinho(a) e a reflexão."
            }
        ]
    },
    {
        enunciado: "Quando você precisa resolver um problema complexo, prefere:",
        alternativas: [
            {
                texto: "Discutir o assunto em grupo para brainstorm.",
                afirmacao: ""
            },
            {
                texto: "Pensar sozinho(a) e elaborar suas próprias soluções.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Ao chegar em um evento social com muitas pessoas, você tende a:",
        alternativas: [
            {
                texto: "Se juntar rapidamente a um grupo e interagir.",
                afirmacao: ""
            },
            {
                texto: "Observar o ambiente primeiro antes de se aproximar de alguém.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Em uma conversa, você geralmente:",
        alternativas: [
            {
                texto: "Fala mais e compartilha suas ideias livremente.",
                afirmacao: ""
            },
            {
                texto: " Ouve mais e pensa antes de responder.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual destas situações te dá mais energia? ",
        alternativas: [
            {
                texto: "Estar rodeado(a) de gente, com muitas atividades.",
                afirmacao: ""
            },
            {
                texto: "Ter um momento de paz e solitude.",
                afirmacao: " "
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
    for(const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "teu resultado ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
