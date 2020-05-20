function textHover() {
  const imgs = document.querySelectorAll(".item img");
  const tl = new TimelineLite({ paused: true, reversed: true });

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("mouseover", (e) => {
      e.target.parentElement.parentElement.nextElementSibling.classList.add(
        "name-active")

      e.target.parentElement.parentElement.nextElementSibling.classList.remove(
        "name"
      );
    });

    imgs[i].addEventListener("mouseout", (e) => {
      e.target.parentElement.parentElement.nextElementSibling.classList.remove(
        "name-active")

      e.target.parentElement.parentElement.nextElementSibling.classList.add(
        "name"
      );
    });
  }
}

function paginationHover() {
  const border = document.querySelectorAll(".border")

  for (let i = 0; i < border.length; i++) {
    border[i].addEventListener("mouseenter", e => {
      e.target.firstChild.style.color = "white"
      e.target.classList.add("border-activate")
      e.target.classList.remove("border")
    })

    border[i].addEventListener("mouseout", e => {
      e.target.firstChild.style.color = "#ff7628"
      e.target.classList.remove("border-activate")
      e.target.classList.add("border")
    })
  }
}


function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}
textHover();
paginationHover()