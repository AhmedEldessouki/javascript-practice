window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelectorAll(".visual");

  const colors = [
    "#5F423A",
    "#0C160D",
    "#3C0703",
    "#40B39D",
    "#C9AD71",
    "#56774A",
  ];
  console.log(sounds);
  // sound here
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);
    });
  });
  //create function that makes bubbles
  const createBubble = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener(`animationend`, function () {
      visual.removeChild(this);
    });
  };
});
