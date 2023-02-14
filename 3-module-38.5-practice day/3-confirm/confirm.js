

const setConfirm = () => {
     const field = confirm("you are visit our site");
     console.log(field);
     if (field === true) {
          console.log(document.location.href);
     }
     else {
          alert("muri khao")
     }
}