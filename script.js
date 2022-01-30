const title = "Верстка лендинга на заказ",
    screens = "Простые, Сложные, Интерактивные",
    screenPrice = 1000,
    rollback = 30,
    fullPrice = 10000,
    adaptive = true;


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

const rollbackSum = fullPrice * rollback / 100;
console.log(rollbackSum);