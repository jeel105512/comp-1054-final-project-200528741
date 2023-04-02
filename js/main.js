const trailer = document.getElementById("trailer")

const animationTrailer = (e) => {
    const x = e.clientX - trailer.offsetWidth / 2, // trailer.offsetWidth / 2 and trailer.offsetHeight / 2 to center the mouse trailer when its stopped
        y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
        transform: `translate(${x}px, ${y}px)`
    }

    trailer.animate(keyframes, {
        duration: 800, // 800ms
        fill: "forwards" // to prevent default, by default when our animation completes over trailer will revert back to the state it was in prior to the animation's begaining
    });
}

window.onmousemove = e => {
    animationTrailer(e);
}