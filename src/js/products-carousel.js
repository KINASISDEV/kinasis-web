
(function () {
  function initAll() {
    const carousels = Array.from(document.querySelectorAll('.products-carousel'));
    carousels.forEach(initCarousel);
  }

  function initCarousel(root) {
    const track = root.querySelector('.carousel-track');
    if (!track) return;
    const cards = Array.from(track.querySelectorAll('.product-card'));
    const dots = Array.from(root.querySelectorAll('.carousel-dots .dot'));
    const btnPrev = root.querySelector('.carousel-btn.prev');
    const btnNext = root.querySelector('.carousel-btn.next');
    let current = cards.findIndex(c => c.classList.contains('active'));
    if (current === -1) current = 0;

    function render() {
      cards.forEach((card, i) => {
        const offset = (i - current) * 110;
        card.style.transform = `translateX(${offset}%)`;
        card.style.opacity = i === current ? '1' : '0.3';
        if (dots[i]) dots[i].classList.toggle('active', i === current);
        card.classList.toggle('active', i === current);
      });
    }

    function next() { current = (current + 1) % cards.length; render(); }
    function prev() { current = (current - 1 + cards.length) % cards.length; render(); }

    if (btnNext) btnNext.addEventListener('click', next);
    if (btnPrev) btnPrev.addEventListener('click', prev);
    dots.forEach((d, i) => d.addEventListener('click', () => { current = i; render(); }));


    render();


    window.addEventListener('resize', () => setTimeout(render, 80));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
