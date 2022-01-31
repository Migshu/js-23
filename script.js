'use strict';
let title = prompt("Как называется ваш проект?", ""),
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные"),
    screenPrice = +prompt("Сколько будет стоить данная работа?", "12000"),
    rollback = 10,
    adaptive = confirm("Нужен ли адаптив на сайте?"),
    service1 = prompt("Какой дополнительный тип услуги нужен?", ""),
    servicePrice1 = +prompt("Сколько это будет стоить?", ""),
    service2 = prompt("Какой еще дополнительный тип услуги нужен?", ""),
    servicePrice2 = +prompt("Сколько это будет стоить?", ""),
    fullPrice = screenPrice + servicePrice1 + servicePrice2,
    rollbackSum = fullPrice * rollback / 100,
    servicePercentPrice = fullPrice - rollbackSum;

console.log(Math.ceil(servicePercentPrice));

switch (true) {
    case 0 <= fullPrice && fullPrice < 15000:
        console.log("Скидка не предусмотрена");
        break;
    case 15000 <= fullPrice && fullPrice < 30000:
        console.log("Даем скидку в 5%");
        break;
    case fullPrice >= 30000:
        console.log("Даем скидку в 10%");
        break;
    default:
        console.log("Что-то пошло не так");
}

console.log(typeof title);
console.log(typeof screens);
console.log(typeof screenPrice);
console.log(typeof rollback);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log("Стоимость верстки экрана " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");

console.log(screens.toLowerCase().split(", "));

console.log(rollbackSum);