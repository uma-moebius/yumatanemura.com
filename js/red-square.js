(() => {
  const ROW_DENSITY = 0.018;
  const MONO_FONT = '"IBM Plex Mono", ui-monospace, monospace';
  const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const el = document.getElementById("red-square");
  const measure = document.getElementById("red-measure").getContext("2d");

  function cssPx(name) {
    const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    if (raw.endsWith("rem")) {
      return parseFloat(raw) * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }
    return parseFloat(raw) || 0;
  }

  function side() {
    return Math.max(0, Math.min(innerWidth, innerHeight) - cssPx("--pad") * 2);
  }

  function render(size) {
    const rows = Math.max(1, Math.round(1 / ROW_DENSITY));
    const fontSize = size / rows;
    measure.font = `700 ${fontSize}px ${MONO_FONT}`;
    const charWidth = measure.measureText("0").width;
    const cols = Math.max(1, Math.floor(size / charWidth));
    const tracking = cols > 1 ? (size - cols * charWidth) / (cols - 1) : 0;

    el.style.width = size + "px";
    el.style.height = size + "px";
    el.style.fontSize = fontSize + "px";
    el.style.letterSpacing = tracking + "px";
    el.replaceChildren();

    for (let r = 0; r < rows; r++) {
      let line = "";
      for (let c = 0; c < cols; c++) {
        line += LETTERS[(Math.random() * 26) | 0];
      }
      const row = document.createElement("div");
      row.className = "red-square__row";
      row.textContent = line;
      el.appendChild(row);
    }
  }

  window.RedSquare = {
    render() {
      render(side());
    },
  };
})();
