// Function to start sorting process when button is clicked
function startSorting() {
    console.log("Sorting hat function called.");

    // Define the questions and corresponding house traits
    const questions = [
        "Which quality do you value most?",
        "What kind of pet would you bring to Hogwarts?",
        "What is your favorite magical subject?",
        "Which Hogwarts house do you admire the most?",
    ];

    const houseTraits = {
        Gryffindor: "Courage",
        Slytherin: "Ambition",
        Ravenclaw: "Wisdom",
        Hufflepuff: "Loyalty",
    };

    let currentQuestionIndex = 0;
    let userAnswers = {};

    // Function to display the next question
    function displayNextQuestion() {
        const question = questions[currentQuestionIndex];
        const answer = prompt(question);
        userAnswers[question] = answer;
        currentQuestionIndex++;

        if (currentQuestionIndex === questions.length) {
            // All questions answered, sort the user into a house
            sortUserIntoHouse(userAnswers);
        } else {
            // Display the next question
            displayNextQuestion();
        }
    }

    // Function to sort the user into a house based on their answers
    function sortUserIntoHouse(answers) {
        console.log("Sorting user into house.");

        let maxTraitValue = -Infinity;
        let houseForUser = "";

        for (const house in houseTraits) {
            const traitValue = answers[questions[0]].toLowerCase().includes(house.toLowerCase()) ? 1 : 0;
            if (traitValue > maxTraitValue) {
                maxTraitValue = traitValue;
                houseForUser = house;
            }
        }

        alert(`Congratulations! You've been sorted into ${houseForUser}. House trait: ${houseTraits[houseForUser]}`);
    }

    // Start the sorting process by displaying the first question
    displayNextQuestion();
}

// Event listener for button click
document.getElementById("sortingButton").addEventListener("click", startSorting);


// Get the video element and video control buttons
const video = document.getElementById("welcomeVideo");
const playPauseButton = document.getElementById("playPauseButton");
const stopButton = document.getElementById("stopButton");
const muteButton = document.getElementById("muteButton");

// Function to play or pause the video
function playPause() {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = "Pause";
    } else {
        video.pause();
        playPauseButton.textContent = "Play";
    }
}

// Function to stop the video
function stopVideo() {
    video.pause();
    video.currentTime = 0;
    playPauseButton.textContent = "Play";
}

// Function to mute or unmute the video
function muteUnmute() {
    if (video.muted) {
        video.muted = false;
        muteButton.textContent = "Mute";
    } else {
        video.muted = true;
        muteButton.textContent = "Unmute";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const characterInfos = document.querySelectorAll(".character-info");
    characterInfos.forEach(info => {
        info.style.transition = "transform 0.5s ease-in-out";
        info.style.transform = "translateX(-100%)";
        setTimeout(() => {
            info.style.transform = "translateX(0)";
        }, 500); // Delay the appearance of each character info by 500 milliseconds
    });
});

document.querySelectorAll(".character-item").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});

// Function to show video modal
function showVideo(character) {
    var modal = document.getElementById(character + 'Modal');
    modal.style.display = "block";
}

// Function to hide video modal
function hideVideo(character) {
    var modal = document.getElementById(character + 'Modal');
    modal.style.display = "none";
}