function pullNPush() {
  const right_arrow = document.querySelector(".arrow-right");
  const left_arrow = document.querySelector(".arrow-left");
  const tl = new TimelineLite({ paused: true, revered: true });
  const author_children = document.querySelector(".author-details").children;

  tl.to(author_children, 0.5, {
    opacity: 0, // Hide the information before animation
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

function fill() {
  const btn = document.querySelectorAll(".btn");

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("mouseover", (e) => {
      anime({
        targets: e.target,
        background: ["rgb(255,255,255)", "rgb(255,118,40)"],
        color: ["rgb(255,118,40)", "rgb(255,255,255)"],
        easing: "easeInSine",
        duration: 200,
      });
    });

    btn[i].addEventListener("mouseout", (e) => {
      anime({
        targets: e.target,
        background: ["rgb(255,118,40)", "rgb(255,255,255)"],
        color: ["rgb(255,255,255)", "rgb(255,118,40)"],
        easing: "easeOutSine",
        duration: 200,
      });
    });
  }
}

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}

fill();
pullNPush();
