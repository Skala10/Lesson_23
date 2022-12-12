"Use strict";

// Відео про For/While
/*
Задача 1
let num = 1;
while (num < 6) {
console.log(num);
num++;
}
*/

/*
Задача 3
for (let num = 0; num < 3; num++) {
	console.log(`Число: ${num}`);
}

let num = 0;
while (num < 3) {
console.log(`Число: ${num}`);
num++;
}
*/

/*
задача 4
firstFor: for (let num = 0; num < 2; num++) {
	//Цикл №2
	for (let size = 0; size < 3; size++) {
		if (num == 1){
			break firstFor;
		};
		console.log(num);
	}
}
*/




// Відео про ТИП NUMBERS

/* Задача 1
let numOne = 1.005 + Number.EPSILON;
let numTwo = Math.round(numOne * 100) / 100;
console.log(numTwo);
*/

/*
Задача 2
let value = parseFloat("135.58px");
console.log(value);
*/

/*
задача 3
let value = 58 + "Фрилансер";
if (58 + "Фрилансер" !== NaN) {
	console.log('Результат выражения NaN');
}
*/

/*
Задача 4
console.log(Math.max(10,58,39,-150,0));
*/

/*
Задача 5
let num = Math.floor(58.858)
console.log(num);
*/

// Відео про ТИП Strings

/*
Задача 1
let fls = "фрилансер";
let text = `Привет! Я ${fls}`;
// Ожидаем получить Привет! Я фрилансер
console.log(text);

не ті кавички стояли. 
*/


/*
Задача2 
Отримати "Н".
let text = 'фрилансер';
let firstSymbol = text[5]
console.log(firstSymbol);
*/


/*
Задача 3
let text = 123 + "456";
console.log(text);
При додаванні Номера та Строки. Результат буде строчним, а це значить ще все додаеться один до одного 123 + 456 = 123456.
*/

/*
Задача 4
let text = 'фрилансер';
console.log(text.toUpperCase());
*/

/*
let text = 'фрилансер';
console.log(text.slice(3,6));
*/

/*
let text = 'фрилансер';
console.log(text.includes('лан', 4));

false. 
True будет если ('лан', 3).
*/
