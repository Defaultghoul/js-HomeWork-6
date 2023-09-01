// 1
let num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}

// 2

for (let num = 2; num <= 20; num++ ) {
    if (num % 2 == 0) {
        console.log(num);
    }
}

// 3

for (let i = 1; i <= 10; i++) {
    console.log(7 * i);
}

// 4

let numbers = [1, 2, 3, 4, 5];
let t = 0;
while (t < numbers.length) {
    console.log(numbers[t]);
    t++;
}

// 5

let numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbersTwo.length; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}

// 6

const n = 10;
let numTwo = 1;

while (numTwo < n) {
    if (numTwo >= n) {
        break;
    }

    console.log(numTwo);
    numTwo++;
}

// 7

let numThree = 1;

while (numThree <= 20) {
    if (numThree % 3 == 0) {
        numThree++;
        continue;
    }
    console.log(numThree);
    numThree++;
}