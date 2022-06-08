// 1 Display 1-20
var myArray = [];
for (a = 0; a <= 20; a++) {
  myArray.push(a);
}

console.log(myArray);

// 2 Display odd
var myArray = [];
for (a = 0; a <= 20; a += 2) {
  myArray.push(a);
}

console.log(myArray);

// 3 Sum total
var sumTotal = 0;
for (a = 0; a < myArray.length; a++) {
  sumTotal += myArray[a];
}

console.log(sumTotal);

// 4 Biggest number
console.log(Math.max(...myArray));
