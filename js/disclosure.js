// Expand/collapse the "Learn More" cards on the solutions + services pages.
for (const btn of document.querySelectorAll('.offer__toggle')) {
  btn.addEventListener('click', () => {
    const card = btn.closest('.offer__item');
    const open = card.classList.toggle('open');

    btn.setAttribute('aria-expanded', String(open));
    const label = btn.querySelector('.offer__toggle-label');
    if (label) label.textContent = open ? 'Show Less' : 'Learn More';
  });
}
