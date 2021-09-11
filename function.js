let year = [];

for (let i = 1929; i < 2021; i++) {
  year.push(i);
}

index = parseInt(Math.random() * 100) % year.length;

year[index];

function discover() {
  document.getElementById("random-year").value = year[index];
}

const category = [
  "ACTOR",
  "ACTRESS",
  "ART DIRECTION",
  "ASSISTANT DIRECTOR",
  "BEST PICTURE",
  "CINEMATOGRAPHY",
  "COSTUME DESIGN",
  "DANCE DIRECTION",
  "DIRECTING",
  "DOCUMENTARY",
  "EDITING",
  "ENGINEERING EFFECTS",
  "FEATURE FILM",
  "HONORARY AWARD",
  "MAKE UP AND HAIRSTYLING",
  "MUSIC SCORE",
  "PRODUCTION",
  "SHORT FILM",
  "SONG",
  "SOUND",
  "SPECIAL AWARD",
  "VISUAL EFFECTS",
  "WRITING",
];
console.log(category[10]);

var length = category.length;

function randomCategory() {
  var rand = Math.round(Math.random() * (length - 1));
}

var newCategory = category[rand];
document.getElementById("random-category").innerHTML = newCategory;
console.log(newCategory);

// function randomYear() {
//     let year = [];

//     for (let i = 1929; i < 2021; i++) {
//       year.push(i);
//     }
//   }

//   index = parseInt(Math.random() * 100) % year.length;

//   year[index];
// //   console.log(year);
// //   console.log(year[index], year.length)
// //   return year[index];

//   function discover() {
//     document.getElementById("random-year").value = randomYear();
//   }

// var input = document.querySelector(#random-year);
// var texto = input.value;
// console.log(texto);

// loop(year = 1929; yearEnd = 2021) {
//     if (year = yearEnd) {
//         exit loop;
//     } else {
//         year += 1930;
//     }
// }

// function pulaLinha() {
//     document.write("<br><br>");
// }

// function mostra(frase) {

//     document.write(frase);
//     pulaLinha();
// }

// for (var year = 1929; year < 2021; i++) {
//     mostra(2021[i]);
// }
