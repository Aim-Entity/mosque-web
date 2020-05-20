// function boxFadeIn() {
//   let count = 0
//   window.addEventListener("scroll", e => {
//     const scrolled = window.scrollY;

//     const tl = new TimelineLite({ paused: true, reversed: true });

//     tl.to(".knowledge", 1, {
//       opacity: 1,
//       ease: Power2.easeOut
//     })

//       .to(".faith", 1, {
//         opacity: 1,
//         ease: Power2.easeOut
//       }, "-=0.5")

//       .to(".poor", 1, {
//         opacity: 1,
//         ease: Power2.easeOut
//       }, "-=0.5")

//     if (scrolled > 200 && count == 0) {
//       toggleTween(tl)

//       count = 1;
//     }

//     // let logo = document.querySelector(".logo")

//     // logo.addEventListener("click", e => {
//     //   toggleTween(tl)
//     // })
//   })

//   function toggleTween(tween) {
//     tween.play()
//   }
// }

// boxFadeIn()