'use strict';

let title,
    screens,
    screenPrice,
    adaptive,
    rollback = 10,
    allServicePrices,
    fullPrice,
    servicePercentPrice,
    service1,
    service2;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
    title = prompt("Как называется ваш проект?", "");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
    do {
        screenPrice = +prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(screenPrice));

    adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function() {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        let price = 0;
    
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?", "");
        } else if (i ===1) {
            service2 = prompt("Какой еще дополнительный тип услуги нужен?", "");
        }

        do {
            price = prompt("Сколько это будет стоить?");
        } while (!isNumber(price));

        sum += +price;
    }
    return sum;
};

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};

function getFullPrice(){
    return screenPrice + allServicePrices;
}

function getServicePercentPrices() {
    return fullPrice - (fullPrice * rollback / 100);
}

const getTitle = function() {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screens);
showTypeOf(screenPrice);
showTypeOf(rollback);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

console.log(screens.toLowerCase().split(", ")); 
console.log(getRollbackMessage(fullPrice));
console.log("Стоимость за вычетом процента отката посреднику: " + Math.ceil(servicePercentPrice));




