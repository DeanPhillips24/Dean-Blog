// Define isMusicPlaying as a global variable and initialize audioElements as an empty object
let isMusicPlaying = true;
let audioElements = {
    housefloor1: document.getElementById("houseAudio"),
    housefloor2: document.getElementById("houseAudio"),
    avenidaTown: document.getElementById("avenidaTownAudio"),
    route1: document.getElementById("route1Audio"),
    academy: document.getElementById("academyAudio"),
    lab: document.getElementById("labAudio"),

};

// Function to play audio based on the current background
function playAudioForBackground(currentBackground) {
    // Pause all audio elements
    for (const key in audioElements) {
        if (audioElements.hasOwnProperty(key)) {
            audioElements[key].pause();
        }
    }

    // Play audio based on the current background
    const audioElement = audioElements[currentBackground];
    if (audioElement) {
        try {
        audioElement.currentTime = 0;
        audioElement.play();
    } catch (error) {
        // Handle error here, log it
        console.error("Error playing audio:", error);
    }
}
}

// Function to update collisions and play music
function updateCollisionsAndPlayMusic() {
    const currentBackgroundId = getCurrentBackgroundId();

    // Get all collision zones
    const collisionZones = document.querySelectorAll('[is="collider-zone"]');

    // Iterate through collision zones and hide/show based on the background ID
    collisionZones.forEach((zone) => {
        const backgroundId = zone.getAttribute("backgroundId");

        if (backgroundId === currentBackgroundId) {
            zone.style.display = "block";
        } else {
            zone.style.display = "none";
        }
    });

    // Play audio based on the current background
    playAudioForBackground(currentBackgroundId);
}

// Function to get the current background ID
function getCurrentBackgroundId() {
    const backgroundElements = document.querySelectorAll('.backgroundImage');

    for (const element of backgroundElements) {
        if (element.style.display !== 'none') {
            return element.id;
        }
    }

    // If no visible background is found, return a default value
    return 'unknown';
}

// Add event listener to the button to play audio
document.getElementById("musicBtn").addEventListener("click", playAudioForBackground);

// Initial update of collisions and music
updateCollisionsAndPlayMusic();

// Periodically check and update collisions every 5 seconds
setInterval(updateCollisionsAndPlayMusic, 5000); // Adjust the time interval as needed

// Play/Pause Music Function
function toggleMusic() {
    isMusicPlaying = !isMusicPlaying;

    if (isMusicPlaying) {
        const currentBackgroundId = getCurrentBackgroundId();
        playAudioForBackground(currentBackgroundId);
    } else {
        for (const key in audioElements) {
            if (audioElements.hasOwnProperty(key)) {
                audioElements[key].pause();
            }
        }
    }
}

// Event Listener for Toggle Music button
document.getElementById("musicBtn").addEventListener("click", () => {
    toggleMusic();
});