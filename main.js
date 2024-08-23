let num = +prompt('Введите число бананов: ');
while (isNaN(num) || num < 1) {
    console.log('Ошибка: введите число больше 0');
    num = +prompt('Введите число бананов: ');
}

for (let i = 1; i <= num; i++) {
    if (i === 1) {
        console.log(`${i} banana`);
    } else {
        console.log(`${i} bananas`);
    }
}


let number = +prompt('Введите число: ');

while (isNaN(number) || number < 1) {
    console.log('Ошибка: введите число больше 0');
    number = +prompt('Введите число: ');
}
let sum = 0;

for (let i = 2; i <= number; i += 2) {
    sum += i;
}

console.log('Сумма всех четных чисел до ' + number + ' равна: ' + sum);



let numbInStep = +prompt('Введите число (не 0 и не буквы): ');

while (isNaN(numbInStep) || numbInStep === 0) {
    console.log('Ошибка: введите корректное число (не 0 и буквы)');
    numbInStep = +prompt('Введите число (не 0 и буквы): ');
}

let exponent = +prompt('Введите степень (по умолчанию 2): ');
if (isNaN(exponent) || exponent === 0) {
    exponent = 2;
}
let result = 1;

for (let i = 0; i < exponent; i++) {
    result *= numbInStep;
}

alert('Результат: ' + result);