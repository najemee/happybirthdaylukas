const letterScreen = document.getElementById('letterScreen');
const envelopeContainer = document.getElementById('envelopeContainer');

envelopeContainer.addEventListener('click', () => {
  envelopeContainer.classList.add('hidden');
  letterScreen.classList.remove('hidden');
});

const playButton = document.getElementById("playMusic");
const music = document.getElementById("birthdayMusic");

let isPlaying = false;

playButton.addEventListener("click", function () {
  if (!isPlaying) {
    music.play();
    playButton.textContent = "⏸️";
    isPlaying = true;
  } else {
    music.pause();
    playButton.textContent = "▶";
    isPlaying = false;
  }
});