import { Block } from "./models/Block";
import { Cell } from "./models/Cell";
import { FigureType, getFigureClass } from "./figures/getFigure";
import { getColor } from "./utils/utils";
import { handleTouchMove, handleTouchStart } from "./utils/mobileSwipe";
import { doubleTap } from "./utils/doubleTap";

const black = "#353839";

export class Board {
    constructor(context: CanvasRenderingContext2D, step: number, sizeY: number, sizeX: number) {

        this.context = context;
        this.step = step;
        this.sizeY = sizeY;
        this.sizeX = sizeX;
        this.initBoard();

        this.intervalId = <any>setInterval(() => {
            if (this.isFinish) return;
            if (this.currentFigure === null) {
                this.getNewFigure();
            } else {
                this.moveFigureDown();

            }
        }, 1000 / 1);


        document.addEventListener("keydown", (e) => {
            if (this.isFinish) return;
            if (e.code === "ArrowRight") {
                this.moveFigureRight();
            }
            if (e.code === "ArrowLeft") {
                this.moveFigureLeft();
            }
            if (e.code === "ArrowUp") {
            }
            if (e.code === "ArrowDown") {
                this.moveFigureDown();
            }
            if (e.code === "Space") {
                this.rotateFigure();
            }
        });
        document.addEventListener('touchstart', doubleTap(this.rotateFigure), false);
        document.addEventListener('touchstart', handleTouchStart, false);
        document.addEventListener('touchmove', handleTouchMove({
            leftSwipe: this.moveFigureLeft,
            downSwipe: this.moveFigureDown,
            rightSwipe: this.moveFigureRight
        }), false);
    }
    blockOfBoard: Array<Block>;
    context: CanvasRenderingContext2D;
    step: number;
    sizeY: number;
    sizeX: number;
    currentFigure: FigureType | null = null;
    intervalId: number;
    isFinish: boolean = false;


    initBoard() {
        const blockOfBoard: Array<Block> = new Array();
        const sizeX = this.sizeX;
        const sizeY = this.sizeY;
        const context = this.context;
        const step = this.step;

        for (let x = 0; x < sizeX; x++) {
            for (let y = 0; y < sizeY; y++) {
                if (
                    (x === 0) ||
                    (y === 0) ||
                    (x === sizeX - 1) ||
                    (y === sizeY - 1)
                ) {
                    const cell = new Cell(context, step);
                    cell.color = black;
                    blockOfBoard.push(new Block(y, x, cell));
                    continue;
                };
            }
        }

        this.blockOfBoard = blockOfBoard;
    }

    draw() {
        this.blockOfBoard.forEach((value, key) => {
            const {
                cell,
                x,
                y
            } = value;

            const startX = x * this.step;
            const startY = y * this.step;
            cell.draw(startY, startX);
        })
        if (this.currentFigure !== null) {
            this.currentFigure.blocksList.forEach(value => {
                const {
                    cell,
                    x,
                    y
                } = value;

                const startX = x * this.step;
                const startY = y * this.step;
                cell.draw(startY, startX);
            })
        }
    }

    getNewFigure() {
        const FigureClass = getFigureClass()
        const [offsetLeft, offsetRight] = FigureClass.getOffset();
        // const index = Math.floor((Math.random() * (this.sizeX - 3)) + 1);
        const index = Math.floor((Math.random() * (this.sizeX - (2 + offsetRight))) + (1 + offsetLeft));

        const coordList = FigureClass.getBlocksForFigure(index);
        if (!this.isCanMove(coordList)) {
            this.finish();
            return;
        }
        const blocksList = [];
        const color = getColor();
        for (let cord of coordList) {
            const [y, x] = cord;
            const cell = new Cell(this.context, this.step);
            cell.color = color;
            blocksList.push(new Block(y, x, cell));
        };
        this.currentFigure = new FigureClass(blocksList);
    }

    isCanMove(list: Array<[number, number]>): boolean {
        const isCan = !this.blockOfBoard.some((block) => {
            const {
                y: blockY,
                x: blockX
            } = block;

            const isCross = list.some(([y, x]) => {

                return blockY === y && blockX === x;
            });

            return isCross;
        })

        return isCan;
    }

    moveFigureDown = () => {
        const cordNext = this.currentFigure.getMoveDownCord();
        if (this.isCanMove(cordNext)) {
            this.currentFigure.apply(cordNext);
        } else {
            this.blockOfBoard = this.blockOfBoard.concat(this.currentFigure.blocksList);
            this.checkBoard();
            this.getNewFigure();
        }
    }

    moveFigureLeft = () => {
        const cordNext = this.currentFigure.getMoveLeftCord();
        if (this.isCanMove(cordNext)) {
            this.currentFigure.apply(cordNext);
        }
    }

    moveFigureRight = () => {
        const cordNext = this.currentFigure.getMoveRightCord();
        if (this.isCanMove(cordNext)) {
            this.currentFigure.apply(cordNext);
        }
    }

    rotateFigure = () => {
        const cordNext = this.currentFigure.rotate();
        if (this.isCanMove(cordNext)) {
            this.currentFigure.rotateApply(cordNext);
        }
    }

    checkBoard() {

        const sizeX = this.sizeX - 2;
        const maps = new Map();
        const itemsForDelete: Array<string> = [];
        let rowIndex = -1;
        let contentBlocks: Array<Block> = [];
        let borderBlocks: Array<Block> = [];
        this.blockOfBoard.forEach(block => {
            if (block.cell.color === black) {
                borderBlocks.push(block);
            } else {
                contentBlocks.push(block);
            }
        });

        contentBlocks.forEach((block) => {
            const {
                x, y
            } = block;

            maps.set(`${y}_${x}`, block);
        })

        for (let y = this.sizeY - 2; y > 0; y--) {
            let isDeleteRow = true;
            for (let x = 1; x < this.sizeX - 1; x++) {
                if (!maps.has(`${y}_${x}`)) {
                    isDeleteRow = false;
                }
            }

            if (isDeleteRow) {
                if (rowIndex === -1) {
                    rowIndex = y;
                }
                break;
            }
        }

        if (rowIndex !== -1) {

            contentBlocks = contentBlocks.filter((block) => {
                return !(block.y === rowIndex);
            })
            contentBlocks = contentBlocks.map(block => {
                if (block.y < rowIndex) block.y = block.y + 1;

                return block;
            })
        }



        this.blockOfBoard = contentBlocks.concat(borderBlocks);

        if (rowIndex !== -1) this.checkBoard();

    }

    finish() {
        clearInterval(this.intervalId);
        this.isFinish = true;
        console.log("THE END");
        alert("THE END");
    }

}