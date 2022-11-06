let progressSpan = document.querySelectorAll(".progress span");
let section = document.querySelector(".our-skills");

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 300) {
        progressSpan.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};

let events = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = events - dateNow;
    // Get Time Units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / 1000 / 60 / 60);
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / 1000 / 60)
    let seconds = Math.floor(dateDiff % (1000 * 60) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}`: days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}`: hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
    }
}, 1000);

// Start Stats
let numbs = document.querySelectorAll(".stats .number")
let statsSection = document.querySelector(".stats");
let started = false;

window.onscroll = function() {
    if (window.scrollY >= statsSection.offsetTop - 300) {
        if (!started) {
            numbs.forEach((num) => startCount(num));
        }
        started = true;
    }
}

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 1000 / goal);
}
// End Stats

