import { Block } from "../models/Block";

export class Figure1 {
    constructor(blocksList: Array<Block>) {
        this.blocksList = blocksList;
        this.state = 1;
    }
    blocksList: Array<Block>;
    state: number;


    static getOffset(): [number, number] {

        return [0, 1];
    }
    static getBlocksForFigure(x: number): Array<[number, number]> {

        return [[1, x], [1, x + 1], [2, x], [2, x + 1]]
    }
    getMoveDownCord(): Array<[number, number]> {
        return this.blocksList.map(block => {
            return [block.y + 1, block.x];
        })
    }
    getMoveLeftCord(): Array<[number, number]> {
        return this.blocksList.map(block => {
            return [block.y, block.x - 1];
        })
    }
    getMoveRightCord(): Array<[number, number]> {
        return this.blocksList.map(block => {
            return [block.y, block.x + 1];
        })
    }

    apply(list: Array<[number, number]>) {
        this.blocksList.forEach((block, index) => {
            block.y = list[index][0];
            block.x = list[index][1];
        })
    }

    rotate(): Array<[number, number]> {

        return this.blocksList.map(({ x, y }) => [y, x]);
    }


    rotateApply(list: Array<[number, number]>) {

    }
}