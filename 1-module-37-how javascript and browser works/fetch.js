/* 
data fetaching from backend with api.
it proccess is async process.
     1.fetch()
*/

console.log("this is first syenchrounus");
console.log("this is sescond seconed syenchrounus");
fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then(res => res.json())
     .then(data => console.log(data));
console.log("this is syenchrounus ")
