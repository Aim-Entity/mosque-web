function textFadeIn() {
  const tl = new TimelineLite({});

  tl.fromTo(
    [".s1 h1", ".s1 p"],
    1,
    {
      y: "500px",
      opacity: 0,
      ease: Power2.easeOut,
    },
    {
      y: "0px",
      opacity: 1,
    }
  );
}

function boxFadeIn() {
  if (window.innerWidth > 949) {
    // If the screen isn't desktop this if wont execute
    let count = 0;
    window.addEventListener("scroll", (e) => {
      const scrolled = window.scrollY;

      const tl = new TimelineLite({ paused: true, reversed: true });

      tl.to(".b1", 1, {
        y: "-400px",
        opacity: 1,
        ease: Power2.easeOut,
      })

        .to(
          ".b2",
          1,
          {
            y: "-400px",
            opacity: 1,
            ease: Power2.easeOut, // Repeating this will create a staggering effect
          },
          "-=0.5"
        )

        .to(
          ".b3",
          1,
          {
            y: "-400px",
            opacity: 1,
            ease: Power2.easeOut,
          },
          "-=0.5"
        );

      if (scrolled > 800 && count == 0) {
        toggleTween(tl); // Execute is certain area of screen

        count = 1;
      }

      // let logo = document.querySelector(".logo")

      // logo.addEventListener("click", e => {
      //   toggleTween(tl)
      // })
    });

    function toggleTween(tween) {
      tween.play(); // Ensuring the animation wont reverse
    }
  }
}

function wiggle() {
  const tl = new TimelineLite({});

  for (let i = 0; i < 1000; i++) {
    tl.to(".drop", 0.5, {
      y: "-20px",
      ease: Power2.easeOut,
    })

      .to(".drop", 0.5, {
        y: "20px",
        ease: Power2.easeOut,
      })

      .to(".drop", 3, {
        y: "0px", // This creates a 3 seconds rest for the animation
      });
  }
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
function smooth() {
  const drop = document.querySelector(".drop");
  function smoothScroll(target, duration) {
    let goTo = document.querySelector(target);
    let targetPosition = goTo.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      let timeElapse = currentTime - startTime;

      let run = ease(timeElapse, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapse < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
  }

  drop.addEventListener("click", () => {
    smoothScroll("#scroll", 1000);
  });
}

smooth();
fill();
wiggle();
boxFadeIn();
textFadeIn();
