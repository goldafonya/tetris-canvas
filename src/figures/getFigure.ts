import { Figure1 } from "./Figure1";
import { Figure2 } from "./Figure2";
import { Figure3 } from "./Figure3";
import { Figure4 } from "./Figure4";
import { Figure5 } from "./Figure5";
import { Figure6 } from "./Figure6";
import { Figure7 } from "./Figure7";

export type FigureType = Figure1 | Figure2 | Figure3 | Figure5;

type a =
    typeof Figure1 |
    typeof Figure2 |
    typeof Figure3 |
    typeof Figure4 |
    typeof Figure5 |
    typeof Figure6 |
    typeof Figure7
export const getFigureClass = (): a => {
    const figures = [
        Figure1,
        Figure2,
        Figure3,
        Figure4,
        Figure5,
        Figure6,
        Figure7,
    ];

    const index = Math.floor(Math.random() * figures.length);

    const clas = figures[index];

    return clas;
}