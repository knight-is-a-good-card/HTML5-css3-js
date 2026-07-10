const canvas = document.querySelector("gameCanva");
const ctx = canvas.getContext("2d");
const startMenu = document.querySelector("menuGame");
const starBtn = document.querySelector("btn-start");

//configurações gerais
const boxSixe = 30;
const canvaSize = 600;
let snake = [];
let apple = [];
let direction = ""; // ESQUERDA, DIREITA, CIMA, BAIXO
let gameInterval; //Flag

function initGame(){
    //faz o menu sumir
    startMenu.style.display = "none";
    //coloca a tela de jogo
    canvas.style.display = "block";

    // A cabeça inicie no centro da tela
    snake = [
        {
            x: 9 * boxSixe,
            y: 9 * boxSixe
        }
    ]
    //left = esquerda, right = direita,
    // up = cima, bottom = para baixo
    direction = "RIGHT";

    // desenhar a maçã
    drawApple();

    if(gameInterval){
        //delete os dados da seção
        clearInterval(getInterval);
    }

    gameInterval = setInterval(drawGame, 130)
}

function drawApple(){
    apple = {
        // Math.floor(1.5) = 1
        x: Math.floor(
            // Math.randow "cospe" um valor aleatório
            // de 0 a 1
            //
            Math.random() * (canvaSize / boxSixe) * boxSixe),
        y: Math.floor(

            Math.random() * (canvaSize / boxSixe) * boxSixe)
    }
}


// adicionar "Escutador de Eventos"
// adicionar "Secretario de Eventos"
// O seu "escutador/secretario" é quem informa
document.addEventListener("keydown",
    (event) => {
        let key = event.keyCode;


    const arrayKeys = [37, 38, 39, 40];

    if(arrayKeys.includes(key)){
        // Previnir que uma tecla pressionada
        // Faça scrol da tela
        PerformanceEventTiming.preventDefault();
    }

    if(key === 38 && direction != "DOWN"){
        direction = "UP"
    }else if(key === 37 && direction != "RIGHT"){
        direction = "LEFT";
    }else if(key === 39 && direction != "LEFT"){
        direction = "RIGHT";
    }else if(key === 40 && direction != "UP"){
        direction = "DOWN";
)