const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;

rl.question('Введіть кількість елементів масиву: ', (answer) => {
    n = parseInt(answer);
    let arr = [];
    let count = 0;
    rl.setPrompt(`Введіть ${count + 1}-й елемент: `);
    rl.prompt();

    rl.on('line', (input) => {
        arr.push(parseInt(input.trim()));
        count++;
        if (count < n) {
            rl.setPrompt(`Введіть ${count + 1}-й елемент: `);
            rl.prompt();
        } else {
            rl.close();
            processInput(arr);
        }
    });
});

function processInput(arr) {

function  sumEvenIndices(arr) {
    let sumEvenIndices = 0;
    for (let i = 0; i < arr.length; i += 2) {
        sumEvenIndices += arr[i];
    }
    return sumEvenIndices
}
function findMaxOddIndex(arr){
    let maxOddIndex = 0;
    let maxOddElement = arr[maxOddIndex];
    for (let i = 3; i < arr.length; i += 2) {
        if (arr[i] > maxOddElement) {
            maxOddIndex = i;
        }
    }
    return maxOddIndex
}


function  findMinOddIndex(arr){
    let minOddIndex = 0;
    let min5OddElement = arr[minOddIndex];
    for (let i = 3; i < arr.length; i += 2) {
        if (arr[i] < minOddElement) {
            minOddElement = arr[i];
            minOddIndex = i;
        }
    }
    return minOddIndex
}

    console.log("Вхідний масив:", arr);
    console.log("Сума елементів з парними індексами:", sumEvenIndices(arr));
    console.log("Максимальний елемент та його індекс:", arr[findMaxOddIndex(arr)], "з індексом", findMaxOddIndex(arr));
    console.log("Мінімальний елемент та його індекс:", arr[findMinOddIndex(arr)], "з індексом", findMinOddIndex(arr));
    console.log("Відсортований масив:",  arr.sort((a, b) => a - b));

    console.log("-----Функції для роботи з масивами-----\n");
    arr.push(7);
    console.log("Масив після додавання елемента в кінець:", arr);

    let lastElement = arr.pop();
    console.log("Видалений останній елемент:", lastElement);
    console.log("Масив після видалення останнього елемента:", arr);

    arr.unshift(1);
    console.log("Масив після додавання елемента в початок:", arr);

    let firstElement = arr.shift();
    console.log("Видалений перший елемент:", firstElement);
    console.log("Масив після видалення першого елемента:", arr);

    let index = arr.indexOf(8);
    console.log("Індекс елемента '8' в масиві:", index);

    let removedElement = arr.splice(index, 1);
    console.log("Видалений елемент за індексом:", removedElement);
    console.log("Масив після видалення елемента за індексом:", arr);

    let copy = arr.slice(1, 3);
    console.log("Скопійована частина масиву:", copy);

    arr.reverse();
    console.log("Масив після перевертання:", arr);

    let joinedString = arr.join("|-|");
    console.log("Рядок, утворений з елементів масиву:", joinedString);
}
