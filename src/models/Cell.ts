import { nanoid } from "nanoid";

export class Cell {
    constructor(ctx: CanvasRenderingContext2D, step: number) {

        this.color = "white";
        this.id = nanoid();
        this.ctx = ctx;
        this.step = step;
    }

    color: string;
    id: string;
    ctx: CanvasRenderingContext2D;
    step: number;

    draw(startY: number, startX: number) {
        const ctx = this.ctx;
        const step = this.step;

        ctx.beginPath();
        ctx.rect(startX + 1, startY + 1, step - 1, step - 1);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath();
    }

}