/* 
1.how t browser work
2.
*/
// 3.
// setTimeout()
/* console.log('this is first execution');
console.log('this is second list');
setTimeout(() => console.log("this is 666666"), 5000);
console.log('this is 5ht'); */
// setInterval()
// console.log('this is first');
// setInterval(() => console.log('this is the First'), 5000);

/* let second = 0;
setInterval(() => {

     second++;
     console.log(second);
}, 5000); */

let sec = 0;
const SetIntervalId = setInterval(() => {
     ++sec;
     console.log(sec);
     if (sec > 4) {
          clearInterval(SetIntervalId);
     }
}, 1000);
