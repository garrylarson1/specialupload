// Mobile nav drawer.
const burger = document.querySelector('.nav__burger');
const drawer = document.querySelector('.nav__drawer');

if (burger && drawer) {
  const setOpen = (open) => {
    drawer.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  };

  burger.addEventListener('click', () => setOpen(!drawer.classList.contains('open')));

  // close once a destination is picked
  drawer.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });
}
