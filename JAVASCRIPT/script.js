let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let dots = document.querySelectorAll(".slider .dots li");

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};
let refreshInterval = setInterval(() => {
  next.click();
}, 3000);
function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";
  //
  let last_active_dot = document.querySelector(".slider .dots li.active");
  last_active_dot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 3000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    active = key;
    reloadSlider();
  });
});
window.onresize = function (event) {
  reloadSlider();
};

////////////!!!!!!

const sliderCustom = document.getElementById("slider-custom");
let currentIndexCustom = 0;
const totalSlidesCustom = document.querySelectorAll(".custom-slide").length;

// Countdown Timer Function
const countdownCustom = () => {
  const endDate = new Date("Oct 15, 2024 23:59:59").getTime();
  const now = Date.now();
  const timeLeft = endDate - now;

  if (timeLeft > 0) {
    // Calculate remaining time
    const daysCustom = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursCustom = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesCustom = Math.floor(
      (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsCustom = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update countdown display
    document.getElementById("days-custom").textContent = daysCustom;
    document.getElementById("hours-custom").textContent = hoursCustom;
    document.getElementById("minutes-custom").textContent = minutesCustom;
    document.getElementById("seconds-custom").textContent = secondsCustom;
  } else {
    // Countdown expired
    // clearInterval(customTimerInterval);
    // document.getElementById("countdown-custom").textContent = "Expired";
  }
};

// Start the countdown and update every second
const customTimerInterval = setInterval(countdownCustom, 1000);
