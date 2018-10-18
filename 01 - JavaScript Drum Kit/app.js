  function playSound (e) {
    //is there a element on the page with the same keycode?
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;  // stop the function from runnin all together 
    audio.currentTime = 0;  //rewind to the start so can play over and over
    audio.play();

    key.classList.add('playing');

    };
  

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;  // skip it if it's not a transform
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);