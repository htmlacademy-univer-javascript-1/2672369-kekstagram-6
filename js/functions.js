// console.log("Файл functions.js успешно подключён!");

// Функция для проверки длины строки
function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

// Примеры проверки работы функции:
checkStringLength('проверяемая строка', 20);
/*
console.log(checkStringLength('проверяемая строка', 20)); // true Cтрока короче 20 символов
console.log(checkStringLength('проверяемая строка', 18)); // true Длина строки ровно 18 символов
console.log(checkStringLength('проверяемая строка', 10)); // false Строка длиннее 10 символов
*/

// Функция для проверки, является ли строка палиндромом
function isPalindrome(str) {
  // "Нормализуем" строку: убираем пробелы - приводим к нижнему регистру
  const normalized = str.replaceAll(' ', '').toLowerCase();
  // Переворачиваем строку вручную
  let reversed = '';
  for (let i = normalized.length - 1; i >= 0; i--) {
    reversed += normalized[i];
  }
  // Сравниваем нормализованную и перевёрнутую строки
  return normalized === reversed;
}

// Примеры проверки:
isPalindrome('топот');
/*
console.log(isPalindrome('топот')); // true
console.log(isPalindrome('ДовОд')); // true
console.log(isPalindrome('Кекс'));  // false
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true
*/
