document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
  
    yesButton.addEventListener('click', () => {
      window.location.href = '';
    });
  
    noButton.addEventListener('mouseover', function() {
      this.style.position = 'absolute';
      this.style.top = Math.random() * (window.innerHeight - this.offsetHeight) + 'px';
      this.style.left = Math.random() * (window.innerWidth - this.offsetWidth) + 'px';
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const audio = new Audio("Audio2.mp3");
    const noButton = document.getElementById("noButton");

    const playAudio = () => {
        audio.play().catch(error => {
            console.log("Reproducción automática bloqueada, esperando interacción del usuario.");
        });
    };

    playAudio();

    document.body.addEventListener("click", () => {
        audio.play();
    }, { once: true });

    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
});