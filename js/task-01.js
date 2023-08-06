const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach((item) => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryElements = item.querySelectorAll('li').length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements}`);
});