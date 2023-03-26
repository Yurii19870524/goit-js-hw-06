const inputRef = document.querySelector('#font-size-control');
console.dir(inputRef);

const spanEl = document.querySelector('#text');
console.dir(spanEl);

const inputFontSize = ({ currentTarget }) => {
  spanEl.style.fontSize = `${currentTarget.value}px`;
};

inputRef.addEventListener('input', inputFontSize);
