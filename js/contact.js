// Contact form: lean on native validation, then show an inline confirmation.
const form = document.querySelector('.form');

if (form) {
  const note = form.querySelector('.form__note');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    form.reset();
    if (note) {
      note.classList.add('show');
      note.focus();
    }
  });
}
