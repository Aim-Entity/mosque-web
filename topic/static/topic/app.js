function reveal() {
  const carpets = document.querySelectorAll(".carpet");

  for (let i = 0; i < carpets.length; i++) {
    // console.log(carpets[i].parentElement.nextElementSibling.firstElementChild);
    const tl = new TimelineLite({ paused: true, reversed: true });

    carpets[i].addEventListener("click", (e) => {
      const target =
        e.target.parentElement.nextElementSibling.firstElementChild;

      tl.to(target, 0.5, {
        opacity: 1,
        height: "auto",
        ease: Power2.easeOut,
      });

      toggleTween(tl);
    });
  }
}

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}
reveal();
