//З використанням властивостей і методів DOM-елементів,
//напиши скрипт, який:
//Порахує й виведе в консоль кількість категорій в
//ul#categories, тобто елементів li.item.
//Для кожного елемента li.item у списку ul#categories
//знайде й виведе в консоль текст заголовка елемента
//(тегу < h2 >) і кількість елементів у категорії(усіх < li >,
// вкладених у нього)

// const categoryAm = document.querySelector("ul").children;
// console.log(`Number of categories: ${categoryAm.length}`);

// const categoriesList = document.querySelectorAll("#categories .item");
// categoriestList.forEach((category) => {
//   const categoryName = category.querySelector("h2").textContent;
//   console.log(`Category: ${categoryName}`);
// });

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
