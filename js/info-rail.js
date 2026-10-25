(() => {
  const rail = document.getElementById("info-rail");
  const stack = document.getElementById("info-stack");
  const today = document.getElementById("info-today");

  function japanDate() {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Tokyo",
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).formatToParts(new Date());
    const day = parts.find((p) => p.type === "day").value;
    const month = parts.find((p) => p.type === "month").value.toUpperCase();
    const year = parts.find((p) => p.type === "year").value;
    return `${day}.${month} ${year}`;
  }

  function size() {
    rail.style.width = "auto";
    rail.style.height = "auto";
    const side = Math.max(stack.offsetWidth, stack.offsetHeight);
    rail.style.width = side + "px";
    rail.style.height = side + "px";
  }

  function init() {
    today.textContent = japanDate();
    size();
  }

  window.InfoRail = { init, size };
})();
