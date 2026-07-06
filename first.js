document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');

  if (!container) return;

  let sequenceTimer;
  let resetTimer;

  const runSequence = () => {
    clearTimeout(sequenceTimer);
    clearTimeout(resetTimer);

    container.classList.remove('done');
    container.classList.remove('animating');
    void container.offsetWidth;
    container.classList.add('animating');

    sequenceTimer = setTimeout(() => {
      container.classList.remove('animating');
      container.classList.add('done');
    }, 1500);

    resetTimer = setTimeout(() => {
      container.classList.remove('done');
      container.classList.remove('animating');
    }, 2500);
  };

  container.addEventListener('click', runSequence);
  container.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      runSequence();
    }
  });
});
