function nextScreen(number) {

    // Hide all screens
    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    // Show requested screen
    document.getElementById("screen" + number).classList.add("active");
}


// YES button
function yesAnswer() {

    nextScreen(3);

}


// NO button
function noAnswer() {

    document.getElementById("noMessage").innerHTML =
        "Idiot ta houu timi 😑<br>Run it back and select YES ❤️";

}


// Love question
function calculateLove() {

    nextScreen(5);

    let progress = 0;

    const bar = document.getElementById("progressBar");
    const percentage = document.getElementById("percentage");

    const interval = setInterval(function () {

        progress += 25;

        bar.style.width = progress + "%";
        percentage.innerText = progress + "%";

        if (progress >= 100) {

            clearInterval(interval);

            setTimeout(function () {

                nextScreen(6);

            }, 800);

        }

    }, 700);

}


// Password
function checkPassword() {

    const password =
        document.getElementById("password").value;

    const message =
        document.getElementById("passwordMessage");


    if (password === "23112024") {

        message.innerHTML =
            "Correct ❤️";

        setTimeout(function () {

            nextScreen(9);

        }, 1000);

    }

    else {

        message.innerHTML =
            "Idiot 😑 Enter the correct password and run it back.";

    }

}