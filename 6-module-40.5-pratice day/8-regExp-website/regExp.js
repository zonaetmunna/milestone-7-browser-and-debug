const inputId = document.getElementById("input-id");
const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const displayResult = document.getElementById("display-result");

const submit = () => {
     const inputField = inputId.value;
     if (inputField === re) {
          const p = document.createElement("p");
          p.innerText = `thanks for valid email`;
          displayResult.appendChild(p);
     }
     else {
          const p = document.createElement("p");
          p.innerText = `please give valid email`;
          displayResult.appendChild(p);
     }
}