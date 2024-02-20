const Category = document.querySelector(".category");
const Type = document.querySelector(".type");
const Steup = document.querySelector(".setup");
const Delivery = document.querySelector(".delivery");

function getJoke() {
    fetch("https://v2.jokeapi.dev/joke/Any?type=twopart")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Network Response Error.");
            }
        })
        .then((data) => {
            startCounting();
            Category.textContent = data.category;
            Type.textContent = data.type;
            Steup.textContent = data.setup;
            Delivery.textContent = data.delivery;
        });
}

// progress

let num = 1;
let intervalId;

function startCounting() {
    clearInterval(intervalId);
    num = 1;
    // Start a new interval
    intervalId = setInterval(() => {
        document.getElementById("progressBar").style.width = `${num}%`; // Update the progress bar
        num++;
        if (num > 100) {
            num = 1;
            getJoke();
        }
    }, 100);
}

function stopCounting() {
    clearInterval(intervalId);
}

document
    .getElementById("continueButton")
    .addEventListener("click", startCounting);
document.getElementById("startButton").addEventListener("click", startCounting);
document.getElementById("stopButton").addEventListener("click", stopCounting);