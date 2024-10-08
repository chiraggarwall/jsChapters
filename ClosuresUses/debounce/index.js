const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  debouncedCount(1, 2, 3);
});

function debounce(cb, d) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(cb(args), d);
  };
}

const debouncedCount = debounce((args) => {
  count.innerHTML = ++triggerCount;
  console.log(...args);
}, 500);
