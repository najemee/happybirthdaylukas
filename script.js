const letterScreen = document.getElementById('letterScreen');
const envelopeContainer = document.getElementById('envelopeContainer');
const letterPhoto = document.getElementById('letterPhoto');
const playButton = document.getElementById("playMusic");
const music = document.getElementById("birthdayMusic");
const musicControl = document.querySelector(".music-control");

let isPlaying = false;

envelopeContainer.addEventListener('click', () => {

  envelopeContainer.classList.add('hidden');
  letterScreen.classList.remove('hidden');
  letterScreen.classList.add('visible');

  letterPhoto.classList.remove('hidden');
  letterPhoto.classList.add('visible');

  musicControl.classList.remove('hidden');
  musicControl.classList.add('visible');
});

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
