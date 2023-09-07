// const userq = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const location = userq.location;
// console.log(location); // Об'єкт location

// const country = userq.location.country;
// console.log(country); // 'Jamaica'

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book["title"];
console.log(bookTitle); // 'The Last Kingdom'

const bookGenres = book["genres"];
console.log(bookGenres); // ['historical prose', 'adventurs']

const propKey = "author";
const bookAuthor = book[propKey];
console.log(bookAuthor); // 'Bernard Cornwell'