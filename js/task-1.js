const categories = document.querySelector("#categories");
const listItems = categories.childElementCount;
console.log("Categoties: " + listItems);

const text = document.querySelectorAll("h2");
for (const texts of text) {
    console.log(texts.textContent);
}

const items = document.querySelectorAll("ul");
console.log(items.length);



//З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

//Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>)
 //і кількість елементів у категорії (усіх <li>, вкладених у нього).