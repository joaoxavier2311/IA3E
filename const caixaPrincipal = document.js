const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"você acha que a Inteligencia Artificial é o futuro do mundo",
        alternativas:["sim","não"]
    },
    {
        enunciado:"Você usa a Inteligencia Artificial no seu trabalho",
        alternativas:["sim","não"] 
    },
    {
        enunciado:"Você é a favor da Inteligencia Artificial",
        alternativas:["sim","não"]
    }
]
let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posica];
    caixaPergunta.textContent = perguntaAtual.enunciado;
mostrarAlternativa()
}
function mostrarAlternativa(){
    
}