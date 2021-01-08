let tapedTwice = false;

export const doubleTap = (handler: () => void) => (event: TouchEvent) => {
    if (!tapedTwice) {
        tapedTwice = true;
        setTimeout(function () { tapedTwice = false; }, 300);
        return false;
    }
    event.preventDefault();
    handler();
}