// const scores = [1, 2, 3, 4, 5];

// // Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
// const deletedScores = scores.splice(0, 3);

// // Тепер масив scores містить два елементи
// console.log(scores); // [4, 5]

// // А масив deletedScores містить три видалені елементи
// console.log(deletedScores); // [1, 2, 3]


// //? Вставка елементів
// const colors = ["red", "green", "blue"];

// colors.splice(2, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]


// //? Заміна елементів за допомогою splice
// const languages = ["C", "C++", "Java", "JavaScript"];

// // Заміняємо елемент з індексом 1 на новий
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заміняємо один елемент (з індексом 2) на декілька
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]
// console.log(languages.length);


// // ? Об'єднання масивів   concat
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]

// ! Функції

// // 1. Оголошення параметрів x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// // 2. Передача аргументів
// multiply(2, 3, 5); // Результат множення дорівнює 30
// multiply(4, 8, 12); // Результат множення дорівнює 384
// multiply(17, 6, 25); // Результат множення дорівнює 2550

// function multiply(x, y, z) {
//   console.log("Код до return виконується звичайним чином");

//   // Повертаємо результат виразу множення
//   return x * y * z;

//   console.log("Цей лог ніколи не виконається, він стоїть після return");
// }

// // Результат роботи функції можна зберегти у змінну
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// console.log("Лог до виклику функції multiply");
// multiply(2, 3, 5); // Результат множення дорівнює 30
// console.log("Лог після виклику функції multiply");

// // Послідовність логів в консолі
// // "Лог до виклику функції multiply"
// // "Результат множення дорівнює 30"
// // "Лог після виклику функції multiply"

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1
// count(1, 17, 3);

// * Псевдомасив arguments

// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// const title = "Privet portret";
// // const titleLowerCase = title.toLoverCase();
// console.log(title.toLowerCase());

// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

// function slugify(title) {
  
// const titleLowerCase = title.toLowerCase();
// const titleLowerCaseMassive = titleLowerCase.split(" ");
// const titleLowerCaseSlugify = titleLowerCaseMassive.join("-");
// return titleLowerCaseSlugify;

// }
// console.log(slugify("Privet portret"));
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   const allArray = firstArray.concat(secondArray);
//   const lenghtAllArray = allArray.length;
//   if (lenghtAllArray > maxLength) {
//   return allArray.slice(0, maxLength);
// }
//   return allArray;
//     // Change code above this line
// }
//  console.log (makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3))

// function calculateTotal(number) {
//  // Change code below this line
// for (i = 1;  i <= number; i += 1) {
//   number = number + 1;
  
// }
//   return number;
//   // Change code above this line
// }
// calculateTotal(10)

// function calculateTotalPrice(order) {
//   let total = 0;
//     for (let i = 0; i < order.length; i+=1) {
//       total = total + order[i];
      
// }
//     return total;
  
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));

// function findLongestWord(string) {
//   // Change code below this line
//   const arrayString = string.split(" ");
//   let longestWord = arrayString[0];
//   for (let i = 0; i < arrayString.length; i += 1) {
//         if (arrayString[i].length > longestWord.length) {
//           longestWord = arrayString[i];
//         }
//   }

//   return longestWord;
//   // Change code above this line
// }
// console.log(findLongestWord("const argument of arguments"));


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for (let i = min; i <= max; i+=1) {
//   numbers.push(i);
// }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(29, 34));

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
  
   
//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));

// function getCommonElements(array1, array2) {
//   // Change code below this line
// let arrayTotalNumbers = [];
//   for (const number of array1) {
//     if (array2.includes(number)) {
//       arrayTotalNumbers.push(number);
//     }
//   }
// return arrayTotalNumbers;

//  // Change code above this line
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// function getEvenNumbers(start, end) {
//    // Change code below this line
// const evenNumbers = [];
//   for (let i = start; i <= end; i+=1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
// return (evenNumbers);

//     // Change code above this line
// }
//   console.log(getEvenNumbers(3, 11));