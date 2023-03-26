const navItemEl = document.querySelectorAll('.item');

console.log('navItemEl', navItemEl);

const list = document.querySelectorAll('li.item');

console.log(`${list.length}`);

const ul = document.querySelectorAll('#categories>li');

ul.forEach(el => {
  console.log(
    `${el.firstElementChild.textContent}, ${el.lastElementChild.children.length}`,
  );
});
