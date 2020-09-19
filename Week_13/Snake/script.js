const snakeboard = document.getElementById("snakeboard");
const snakeboard_ctx = snakeboard.getContext("2d");
const board_border = 'black';
const board_background = 'green';
const snake_color = 'yellow';
const snake_border = 'darkblue';


let snake = [ 

    {x:200, y:200},
    {x:190, y:200},
    {x:180, y:200},
    {x:170, y:200},
    {x:160, y:200},
];

function main() {
    clearCanvas();
    drawSnake();
}

function clearCanvas() {
    snakeboard_ctx.fillstyle = board_background;
    snakeboard_ctx.strokestyle = board_border;
    snakeboard_ctx.fillRect(0,0, snakeboard.width, snakeboard.height);
    snakeboard_ctx.strokeRect(0,0, snakeboard.width, snakeboard.height);

}

function drawSnakePart(snakePart)
{
    snakeboard_ctx.fillstyle = 'yellow';
    snakeboard_ctx.strokestyle = 'darkblue';
    snakeboard_ctx.fillRect(snake.x, snakePart.y,10,10);
}
function drawSnake()
{
    snake.forEach(drawSnakePart);
}
