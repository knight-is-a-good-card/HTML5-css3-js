const canvas = document.querySelector(".gameCanva");
const ctx = canvas.getContext("2d");
const startMenu = document.querySelector(".menuGame");
const starBtn = document.querySelector("#btn-start");

//configurações gerais
const boxSixe = 30;
const canvaSize = 600;
const bgCanvas = "#e8f5e9";
const snakeHead = "#686868";
const snakeBody = "#000000";
const appleColor = "#e41e0f";
let snake = [];
let apple = {};
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
        clearInterval(gameInterval);
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
            Math.random() * (canvaSize / boxSixe)) * boxSixe,
        y: Math.floor(

            Math.random() * (canvaSize / boxSixe)) * boxSixe
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
            event.preventDefault();
        }

        if(key === 38 && direction != "DOWN"){
            direction = "UP"
        }else if(key === 37 && direction != "RIGHT"){
            direction = "LEFT";
        }else if(key === 39 && direction != "LEFT"){
            direction = "RIGHT";
        }else if(key === 40 && direction != "UP") {
            direction = "DOWN";
        }
    }
)

function drawGame() {
    ctx.fillStyle = bgCanvas;
    ctx.fillRect(0, 0, canvaSize, canvaSize);

    let tamanho_cobra = snake.length;
    for (let i = 0; i < tamanho_cobra; i++) {
        ctx.fillStyle = (i === 0) ? snakeHead : snakeBody;

        ctx.fillRect(snake[i].x, snake[i].y, boxSixe, boxSixe);
        ctx.strokeStyle = bgCanvas;
        ctx.strokeRect(snake[i].x, snake[i].y, boxSixe, boxSixe);
    }

    ctx.fillStyle = appleColor;
    ctx.beginPath();
    ctx.arc(apple.x + boxSixe / 2, apple.y + boxSixe / 2,
        boxSixe/2.2, 0, Math.PI * 2);
    ctx.fill();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "LEFT")  snakeX -= boxSixe;
    if (direction == "UP")    snakeY -= boxSixe;
    if (direction == "RIGHT") snakeX += boxSixe;
    if (direction == "DOWN")  snakeY += boxSixe;

    if (snakeX < 0 || snakeX >= canvaSize || snakeY < 0 ||
        snakeY >= canvaSize || checkCollision(snakeX, snakeY, snake)) {
            clearInterval(gameInterval);
            alert("Fim de Jogo! A cobra comeu " + (snake.length - 1) +    "maçãs.");
            startMenu.style.display = "block";
            canvas.style.display = "none";
            return;
        }
        
        if (snakeX === apple.x && snakeY === apple.y) {
            drawApple();
        } else {
            snake.pop();
        }

        let newHead = { x: snakeX, y: snakeY };
        snake.unshift(newHead);
}

function checkCollision(headX, headY, array) {
    for (let i = 0; i < array.length; i++) {
        if (headX === array[i].x && headY === array[i].y) {
            return true;
        }
    }
    return false;
}

starBtn.addEventListener("click", initGame);