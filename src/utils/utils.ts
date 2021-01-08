export const getColor = () => {
    const colors = ["#0341AE", "#72CB3B", "#FFD500", "#FF971C", "#FF3213"];

    const index = Math.floor(Math.random() * colors.length);

    const color = colors[index];

    return color;
}
