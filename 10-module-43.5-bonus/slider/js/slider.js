const images = [
     'images/munna1.jpg',
     'images/munna2.jpg',
     'images/munna3.jpg',
     'images/munna4.jpg'
];

let imgIndex = 0;
const imagesSlider = document.getElementById("image-slider");
setInterval(() => {
     if (imgIndex >= images.length) {
          imgIndex = 0;
     }

     const imgUrl = images[imgIndex];
     imagesSlider.setAttribute("src", imgUrl);

     imgIndex++;
     // console.log(imgIndex);

}, 1000)