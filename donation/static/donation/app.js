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

fill()