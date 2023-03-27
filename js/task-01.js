const navItemEl = document.querySelectorAll('.item');

const list = document.querySelectorAll('li.item');

console.log(`Number of categories: ${list.length}`);

const ul = document.querySelectorAll('#categories>li');

ul.forEach(el => {
  console.log(
    `category: ${el.firstElementChild.textContent}`,
    `Elements: ${el.lastElementChild.children.length}`,
  );
});
