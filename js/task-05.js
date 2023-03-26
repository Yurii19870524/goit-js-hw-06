const input = document.querySelector('#name-input');
console.dir(input);

const spanEl = document.querySelector('#name-output');
console.dir(spanEl);

input.addEventListener('input', onInputChange);

function onInputChange({ currentTarget }) {
  if (currentTarget.value.trim() !== '') {
    spanEl.textContent = event.currentTarget.value.trim();
  } else {
    return (spanEl.textContent = 'Anonymous');
  }
}

// const getInputValue = ({ currentTarget }) => {
//   if (currentTarget.value.trim() !== '') {
//     spanEl.textContent = currentTarget.value.trim();
//   } else {
//     spanEl.textContent = 'Anonymous';
//   }
// };

// input.addEventListener('input', getInputValue);
