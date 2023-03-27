const inputRef = document.querySelector('#font-size-control');

const spanEl = document.querySelector('#text');

const inputFontSize = ({ currentTarget }) => {
  spanEl.style.fontSize = `${currentTarget.value}px`;
};

inputRef.addEventListener('input', inputFontSize);
