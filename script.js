(function () {
  const TOKEN_SRC = 'assets/token-logo-SF.png';

  function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  function tokenCount() {
    return window.innerWidth < 480 ? 12 : window.innerWidth < 768 ? 18 : 28;
  }

  function createToken(rain) {
    const img = document.createElement('img');
    img.src = TOKEN_SRC;
    img.className = 'token';
    img.alt = '';

    const size = randomBetween(24, 40);
    const duration = randomBetween(6, 14);
    const delay = randomBetween(-14, 0);
    const opacity = randomBetween(0.5, 1);
    const spin = randomBetween(-360, 360);

    img.style.left = `${randomBetween(0, 100)}%`;
    img.style.width = `${size}px`;
    img.style.opacity = opacity;
    img.style.animationDuration = `${duration}s`;
    img.style.animationDelay = `${delay}s`;
    img.style.setProperty('--rot', `${spin}deg`);

    rain.appendChild(img);
  }

  function buildTokenRain() {
    const rain = document.getElementById('tokenRain');
    if (!rain) return;
    rain.innerHTML = '';
    const count = tokenCount();
    for (let i = 0; i < count; i++) {
      createToken(rain);
    }
  }

  let resizeTimer;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildTokenRain, 250);
  }

  buildTokenRain();
  window.addEventListener('resize', onResize);
})();
