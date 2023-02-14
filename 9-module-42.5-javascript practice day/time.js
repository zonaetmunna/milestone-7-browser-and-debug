console.time();
for (var i = 0; i < 100000; i++) {
     let square = i ** 2;
     console.log(square);
}
console.timeEnd();