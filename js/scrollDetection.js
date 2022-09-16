let oldValue = 0;
let newValue = 0;

window.addEventListener("scroll", () => {
  newValue = window.scrollY;

  if (oldValue < newValue) console.log("ScrollDown");
  else if (oldValue > newValue) console.log("ScrollUp");

  oldValue = newValue;
});
