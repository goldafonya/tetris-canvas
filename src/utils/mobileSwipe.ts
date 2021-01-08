
var xDown: number = null;
var yDown: number = null;

export const handleTouchStart = (event: TouchEvent) => {
    const firstTouch = event.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

export const handleTouchMove =
    ({ leftSwipe, downSwipe, rightSwipe }: { leftSwipe: () => void, downSwipe: () => void, rightSwipe: () => void }) =>
        (event: TouchEvent) => {
            if (!xDown || !yDown) {
                return;
            }

            var xUp = event.touches[0].clientX;
            var yUp = event.touches[0].clientY;

            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;

            if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
                if (xDiff > 0) {
                    leftSwipe();
                } else {
                    rightSwipe();
                }
            } else {
                if (yDiff > 0) {
                    /* up swipe */
                } else {
                    downSwipe();
                }
            }
            /* reset values */
            xDown = null;
            yDown = null;
        };