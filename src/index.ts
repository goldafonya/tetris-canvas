import { Board } from "./Board";

// @ts-ignore
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        // @ts-ignore
        window.mozRequestAnimationFrame ||
        // @ts-ignore
        window.oRequestAnimationFrame ||
        // @ts-ignore
        window.msRequestAnimationFrame ||
        // @ts-ignore
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

function isCanvas(obj: Element): obj is HTMLCanvasElement {
    return obj.tagName === 'CANVAS';
}

function app() {
    const canvas = document.querySelector("#canvas");
    if (!isCanvas(canvas)) throw new Error("not canvas");
    const context = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const step = 30;
    const sizeY = height / 30;
    const sizeX = width / 30;
    console.log("size h", sizeY);
    console.log("size v", sizeX);

    const board = new Board(context, step, sizeY, sizeX);

    function loop() {
        // @ts-ignore
        window.requestAnimFrame(loop);
        context.beginPath();
        context.rect(0, 0, width, height);
        context.fillStyle = "white";
        context.fill();
        context.closePath();
        board.draw();
    }
    // @ts-ignore
    window.requestAnimFrame(loop);
}
setTimeout(app);