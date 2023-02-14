/* 
this function are asyncrouns function with browser.
     1.setInterval() 
     2.clearInterval()

*/

/*
console.log("this is munna");
console.log("this is rana");
console.log("this is mohin");
setInterval(() => {
     console.log('munna');
}, 5000)
 */

let second = 0;
const timeId = setInterval(() => {
     second++;
     console.log(second);
     if (second > 6) {
          clearInterval(timeId);
     }

}, 3000);

