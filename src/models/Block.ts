import { Cell } from "./Cell";
import { nanoid } from "nanoid";

export class Block {
    constructor(y: number, x: number, cell: Cell) {
        this.y = y;
        this.x = x;
        this.id = nanoid();
        this.cell = cell;
    }
    id: string;
    y: number;
    x: number;
    cell: Cell;
}