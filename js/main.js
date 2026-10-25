InfoRail.init();

function render() {
  RedSquare.render();
  InfoRail.size();
}

document.fonts.ready.then(render);
addEventListener("resize", render);
