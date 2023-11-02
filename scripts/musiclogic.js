// Function to play audio based on the current background
function playAudioForBackground(currentBackground) {
    const audioElements = {
        housefloor1: document.getElementById("houseAudio"),
        avenidaTown: document.getElementById("avenidaTownAudio"),
        route1: document.getElementById("route1Audio"),
    };

    // Pause all audio elements
    for (const key in audioElements) {
        if (audioElements.hasOwnProperty(key)) {
            audioElements[key].pause();
        }
    }

    // Play audio based on the current background
    const audioElement = audioElements[currentBackground];
    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
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

// Function to get the current background ID (you need to implement this)
function getCurrentBackgroundId() {
    // Implement your logic to determine the current background ID
    return "avenidaTown"; // Replace with your logic to retrieve the current background ID
}

// Add event listener to the button to play audio and update collisions
document.getElementById("musicBtn").addEventListener("click", updateCollisionsAndPlayMusic);

// Periodically check and update collisions every few seconds
setInterval(updateCollisionsAndPlayMusic, 5000); // Adjust the time interval as needed
