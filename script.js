'use strict';

let title = prompt("Как называется ваш проект?", ""),
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные"),
    screenPrice = +prompt("Сколько будет стоить данная работа?", "12000"),
    adaptive = confirm("Нужен ли адаптив на сайте?"),
    service1 = prompt("Какой дополнительный тип услуги нужен?", ""),
    servicePrice1 = +prompt("Сколько это будет стоить?", ""),
    service2 = prompt("Какой еще дополнительный тип услуги нужен?", ""),
    servicePrice2 = +prompt("Сколько это будет стоить?", ""),
    rollback = 10,
    fullPrice,
    servicePercentPrice;
    

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};

const getRollbackMessage = function(price) {
    switch (true) {
    case 0 <= price && price < 15000:
        return "Скидка не предусмотрена";
    case 15000 <= price && price < 30000:
        return "Даем скидку в 5%";
    case price >= 30000:
        return "Даем скидку в 10%";
    default:
        return "Что-то пошло не так";
    }
};

let getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
};

function getFullPrice(){
    return screenPrice + allServicePrices;
}

function getTitle(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function getServicePercentPrices() {
    return fullPrice - (fullPrice * rollback / 100);
}

let allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(screens);
showTypeOf(screenPrice);
showTypeOf(rollback);
showTypeOf(fullPrice);
showTypeOf(adaptive);


console.log(screens.toLowerCase().split(", ")); 
console.log(getRollbackMessage(fullPrice));
console.log("Стоимость за вычетом процента отката посреднику: " + Math.ceil(servicePercentPrice));




