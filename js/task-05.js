const input = document.querySelector('#name-input');

const spanEl = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange({ currentTarget }) {
  if (currentTarget.value.trim() !== '') {
    spanEl.textContent = event.currentTarget.value.trim();
  } else {
    return (spanEl.textContent = 'Anonymous');
  }
}
