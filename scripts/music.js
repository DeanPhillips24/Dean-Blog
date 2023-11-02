// Background is House Floor 2 or 1
if (newBackgroundId === "housefloor2" || newBackgroundId === "housefloor1") {
    const houseAudio = document.getElementById("houseAudio");
    houseAudio.play();
}

// Background is Avenida Town
if (newBackgroundId === "avenidaTown") {
    const avenidaTownAudio = document.getElementById("avenidaTownAudio");
    avenidaTownAudio.play();
}

// Background is Route 1
if (newBackgroundId === "route1") {
    const route1Audio = document.getElementById("route1Audio");
    route1Audio.play();
}

// Background is Academy
if (newBackgroundId === "academy") {
    const academyAudio = document.getElementById("academyAudio");
    academyAudio.play();
}

// Background is Lab
if (newBackgroundId === "lab") {
    const labAudio = document.getElementById("labAudio");
    labAudio.play();
}
