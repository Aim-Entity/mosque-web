function formAnimation() {
  const forms = document.querySelectorAll(".c-forms");

  for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener("focus", (e) => {
      // Focus => on form click
      const tl = new TimelineLite({ paused: true, reversed: true });

      tl.to(e.target, 1, {
        borderBottom: "12px solid #c7c3c3",
        ease: Power2.easeOut,
      });
      toggleTween(tl); // Invoked inside of event listener
    });

    forms[i].addEventListener("blur", (e) => {
      // blur => on form click out
      const tl = new TimelineLite({ paused: true, reversed: true });

      tl.to(e.target, 1, {
        borderBottom: "2px solid #c7c3c3",
        ease: Power2.easeOut,
      });
      toggleTween(tl);
    });
  }

  function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.reverse();
  }
}

function paperPlane() {
  $("button").click(function () {
    $(this).toggleClass("clicked");
    $("button p").text(function (i, text) {
      return text === "Sent!" ? "Send" : "Sent!";
    });
  });
}

paperPlane();
formAnimation();
