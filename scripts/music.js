// Define a function to play audio for a given background
function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    audio.play();
}

// Add event listener to the button to play audio for the current background
document.getElementById("playBackgroundMusic").addEventListener("click", function () {
    // Determine the current background (you can replace this logic with your own)
    const currentBackground = "housefloor2"; // Change this to your actual background detection logic

    // Play the audio based on the current background
    if (currentBackground === "housefloor2" || currentBackground === "housefloor1") {
        playAudio("houseAudio");
    } else if (currentBackground === "avenidaTown") {
        playAudio("avenidaTownAudio");
    } else if (currentBackground === "route1") {
        playAudio("route1Audio");
    } else if (currentBackground === "academy") {
        playAudio("academyAudio");
    } else if (currentBackground === "lab") {
        playAudio("labAudio");
    }
});
