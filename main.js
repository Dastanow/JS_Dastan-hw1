// ----------1
let name = prompt('what is your name?')
let str = '';
for (i = 0; i <= 3; i++ ) {
    str = 'happy birthday to you '
    console.log(str);
}
// ----------2
function compareNumbers(num1, num2) {
    if (num1 === num2) {
      return "4=4";
    } else if (num1 > num2) {
      return "5>3";
    } else {
      return "2<5";
    }
  }
  
  // Пример использования функции
  console.log(compareNumbers(5, 3)); // Второе число больше
  console.log(compareNumbers(2, 5)); // Первое число больше
  console.log(compareNumbers(4, 4)); // Числа равны
// ----------3
function pedestrianAction(color) {
    if (color === "green") {
      return "Идти";
    } else if (color === "yellow") {
      return "Ждать";
    } else if (color === "red") {
      return "Стоять";
    } else {
      return "Неверное значение цвета";
    }
  }
  // Пример использования
var color = prompt("Введите цвет светофора (green, yellow или red): ");

var action = pedestrianAction(color);
console.log(action);


  
  
  
  