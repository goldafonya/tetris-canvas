import { Block } from "../models/Block";

export class Figure4 {
    constructor(blocksList: Array<Block>) {
        this.blocksList = blocksList;
        this.state = 1;
    }
    blocksList: Array<Block>;
    state: number;


    static getOffset(): [number, number] {

        return [1, 1];
    }
    static getBlocksForFigure(x: number): Array<[number, number]> {

        return [[1, x], [1, x + 1], [2, x], [2, x - 1]]
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
        const [block1, block2, block3, block4] = this.blocksList;

        switch (this.state) {
            case 1:
                return [[block1.y + 1, block1.x + 1], [block2.y + 2, block2.x], [block3.y, block3.x], [block4.y - 1, block4.x + 1]];
            case 2:
                return [[block1.y - 1, block1.x - 1], [block2.y - 2, block2.x], [block3.y, block3.x], [block4.y + 1, block4.x - 1]];
            default: throw new Error("default case - " + this.state);
        }
    }


    rotateApply(list: Array<[number, number]>) {
        this.blocksList.forEach((block, index) => {
            block.y = list[index][0];
            block.x = list[index][1];
        })

        this.state++;
        if (this.state === 3) this.state = 1;
    }
}