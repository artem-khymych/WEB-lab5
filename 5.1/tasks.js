/*                      TASK 2                 */
console.log("TASK 2")
function getProductDetails(productId, successCallback, errorCallback) {
    // Припустимо, що ми маємо масив об'єктів товарів
    const products = [
        { id: 1, name: 'Товар 1', price: 100 },
        { id: 2, name: 'Товар 2', price: 200 },
        { id: 3, name: 'Товар 3', price: 300 }
    ];

    // Пошук товару за ідентифікатором
    const product = products.find(item => item.id === productId);

    // Перевірка, чи знайдено товар
    if (product) {
        // Якщо товар знайдено, передаємо його у successCallback
        successCallback(product);
    } else {
        // Якщо товар не знайдено, викликаємо errorCallback з повідомленням про помилку
        errorCallback('Товар не знайдено');
    }
}

// Приклад використання функції getProductDetails
const productId = 2; // Ідентифікатор товару для пошуку

// Колбек-функція для успішного виконання
const successCallback = (product) => {
    console.log('Деталі товару:', product);
};

// Колбек-функція для випадку помилки
const errorCallback = (errorMessage) => {
    console.error('Помилка:', errorMessage);
};

// Виклик функції getProductDetails з передачею ідентифікатора товару та колбек-функцій
getProductDetails(productId, successCallback, errorCallback);
console.log("TASK 4")


/*                      TASK 4                 */
const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};

// Отримуємо масив імен міст з об'єкта concerts
const cityNames = Object.keys(concerts);

// Видаляємо міста, в яких концерт вже пройшов
const upcomingCities = cityNames.filter(city => concerts[city] > new Date());

// Сортуємо міста у хронологічному порядку
const sortedCities = upcomingCities.sort((cityA, cityB) => concerts[cityA] - concerts[cityB]);

// Виводимо результат у консоль
console.log(sortedCities);

/*           TASK 6              */
console.log("TASK 6")
const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 },
];

const applyDiscount = (medicines) => {
    const discountedMedicines = medicines.map(medicine => {
        if (medicine.price > 300) {
            return {
                id: Math.random().toString(36).substr(2, 9), // Генеруємо випадковий id
                name: medicine.name,
                price: medicine.price * 0.7, // Знижка 30%
            };
        } else {
            return {
                id: Math.random().toString(36).substr(2, 9), // Генеруємо випадковий id
                name: medicine.name,
                price: medicine.price,
            };
        }
    });

    return discountedMedicines;
};

const discountedMedicines = applyDiscount(medicines);
console.log(discountedMedicines);


/*           TASK 8              */
console.log("TASK 8")
function Storage(initialItems) {
    this.items = initialItems;

    this.getItems = function() {
        return this.items;
    };

    this.addItems = function(item) {
        this.items.push(item);
    };

    this.removeItem = function(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    };
}

const arr = ["apple", "banana", "mango"];
const storage = new Storage(arr);

console.log(storage.getItems()); // ["apple", "banana", "mango"]

storage.addItems("orange");
console.log(storage.getItems()); // ["apple", "banana", "mango", "orange"]

storage.removeItem("banana");
console.log(storage.getItems()); // ["apple", "mango", "orange"]


/*           TASK 10              */
console.log("TASK 10")
function checkBrackets(str) {
    const stack = [];
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];

    for (let char of str) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];
            if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Приклади використання
console.log(checkBrackets("someFn()")); // true
console.log(checkBrackets("someFn({}[])")); // true
console.log(checkBrackets("someFn({}[])()")); // true
console.log(checkBrackets("someFn({}[)")); // false
console.log(checkBrackets("someFn({}))")); // false
