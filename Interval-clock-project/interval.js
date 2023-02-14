let second = 0;
const timeId = setInterval(() => {
     second = second + 1;
     console.log(second)
     if (second > 15) {
          clearInterval(timeId);
     }
}, 1000);