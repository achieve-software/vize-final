//? ORNEK: Kullanicidan  Vize ve Final notlarini isteyen ve
//? vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi
//? yaziniz. Program her hesaplamadan sonra tekrar hesaplama yapilmak
//? istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not
//? isteyecek ve islemleri tekrar edecektir.
let again = "";
do {
  let avg = 0;
  let midterm = Number(prompt("your midterm grade:"));
  let final = Number(prompt("your final grade:"));
  avg = midterm * 0.4 + final * 0.6;
  console.log(`Your Score is ${avg}`);
  again = prompt("Do you want to continue(e/E)?");
} while (again === "e" || again === "E");
console.log("See you later. Bye");
