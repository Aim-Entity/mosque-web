function navigation() {
  let hamburger = document.querySelector(".hamburger");

  const tl = new TimelineLite({ paused: true, reversed: true });

  tl.to(".base-ul", 0.4, {
    height: "667px", // Setting height so animation doesn't look weird. 0px ==> 667px
  }).fromTo(
    ".base-ul",
    1,
    {
      ease: Power2.easeOut,
    },
    {
      width: "100%",
      x: "100%",
    },
    "-=0.5"
  );

  hamburger.addEventListener("click", (e) => {
    toggleTween(tl);
  });

  function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.reverse();
  }
}

function fixedNav() {
  const nav = document.querySelector(".navigation");
  let count = 0;
  window.addEventListener("scroll", (e) => {
    const scrolled = window.scrollY;

    if (scrolled > 79 && count == 0) {
      nav.classList.add("navigation-active");
      nav.classList.remove("navigation");
      count = 1;
    } else if (scrolled < 80) {
      nav.classList.remove("navigation-active");
      nav.classList.add("navigation");
      count = 0;
    }
  });
}

function message() {
  window.addEventListener("DOMContentLoaded", (e) => {
    anime
      .timeline({
        easing: "easeOutExpo",
      })

      .add({
        targets: ".alert-success",
        translateX: ["-500px", "0px"], // Message will pop in the slide out
        duration: 3200,
      })

      .add({
        targets: ".alert-success",
        translateX: ["0px", "-1000px"],
        duration: 2000,
      });
  });
}

function borderMagic() {
  let navigation = document.querySelectorAll(".base-ul li a");

  for (let i = 0; i < navigation.length; i++) {
    navigation[i].addEventListener("mouseenter", (e) => {
      anime
        .timeline({
          easing: "easeOutSine",
        })

        .add({
          targets: e.target,
          borderBottom: ["none", "2px white solid"],
          duration: 100,
        });
    });

    navigation[i].addEventListener("mouseout", (e) => {
      anime
        .timeline({
          easing: "easeOutSine",
        })

        .add({
          targets: e.target,
          borderBottom: ["2px white solid", "0px"],
          duration: 100,
        });
    });
  }
}

borderMagic();
message();
fixedNav();
navigation();
