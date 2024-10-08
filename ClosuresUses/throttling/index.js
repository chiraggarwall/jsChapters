const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  throttled();
});

function myThrottle(cb, d) {
  let last = 0;
  return () => {
    const now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    cb();
  };
}

var throttled = myThrottle(() => {
  triggerCount += 1;
  count.innerHTML = triggerCount;
}, 1000);
