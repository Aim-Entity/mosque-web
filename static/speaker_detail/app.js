function pullNPush() {
  const right_arrow = document.querySelector(".arrow-right");
  const left_arrow = document.querySelector(".arrow-left");
  const tl = new TimelineLite({ paused: true, revered: true });
  const author_children = document.querySelector(".author-details").children;

  tl.to(author_children, 0.5, {
    opacity: 0,
    ease: Power2.easeOut,
  })
    .to(
      ".author-details",
      1,
      {
        width: "20px",
        ease: Power2.easeOut,
      },
      "-=0.2"
    )
    .to(".author-social", 1, {
      width: "284px",
      ease: Power2.easeOut,
    })
    .to(".inner-social", 0.5, {
      opacity: 1,
      ease: Power2.easeOut,
    });

  right_arrow.addEventListener("click", (e) => {
    toggleTween(tl);
  });

  left_arrow.addEventListener("click", (e) => {
    toggleTween(tl);
  });
}

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}

pullNPush();
