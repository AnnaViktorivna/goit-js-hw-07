const categoriesList = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("ul>li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${itemsCount}`);
});

const title = document.querySelector("h2");
title.classList.add("title-style");

const itemLists = document.querySelectorAll("#categories .item ul");

itemLists.forEach((ul) => {
  ul.classList.add("common-list"); // Додати клас 'common-list' до кожного знайденого списку
});
