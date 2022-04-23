(() => {
  const timer = setInterval(() => {
    const heading = document.querySelector('div[role="heading"]');
    if (heading == null) {
      clearInterval(timer);
      return;
    }
    let clock = document.getElementById("meet_clock");
    if (clock == null) {
      clock = document.createElement("span");
      clock.setAttribute("id", "meet_clock");
      heading.appendChild(clock);
    }
    const d = new Date();
    const time = [d.getHours(), d.getMinutes(), d.getSeconds()]
      .map((i) => (i.toString().length == 1 ? "0" : "") + i.toString())
      .join(":");
    clock.innerText = time;
  }, 1000);
})();
