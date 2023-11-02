// Function to play audio
function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    if(audio) {
        audio.play();
    }
}

// Function to play audio based on the current background
function playAudioForBackground(currentBackground) {
    // Play the audio based on the current background
    if (currentBackground === "housefloor2" || currentBackground === "housefloor1") {
        playAudio("houseAudio");
    } else if (currentBackground === "avenidaTown") {
        playAudio("avenidaTownAudio");
    } else if (currentBackground === "route1") {
        // Play audio for Route 1, add similar code for other backgrounds
    }
}

// Function to update collisions based on the current background
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
