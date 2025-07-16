const script1 = document.createElement('script');
script1.src = 'https://cdn.jsdelivr.net/npm/particles.js';
document.head.appendChild(script1);

script1.onload = () => {
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
};