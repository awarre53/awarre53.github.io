const slides = [
    { src: "images/slideshow/surfing.jpg", caption: "A - Austin" },
    { src: "images/slideshow/uniform.jpeg", caption: "U - Uniform" },
    { src: "images/slideshow/shirt.jpeg", caption: "S - Shirt" },
    { src: "images/slideshow/tennis_ball.jpeg", caption: "T - Tennis Ball" },
    { src: "images/slideshow/imac.jpeg", caption: "I - iMac" },
    { src: "images/slideshow/new_balance.jpeg", caption: "N - New Balance" },
    { src: "images/slideshow/water_bottle.jpeg", caption: "W - Water Bottle" },
    { src: "images/slideshow/airpods.jpeg", caption: "A - AirPods" },
    { src: "images/slideshow/remote.jpeg", caption: "R - Remote" },
    { src: "images/slideshow/ruler.jpeg", caption: "R - Ruler" },
    { src: "images/slideshow/electric_toothbrush.jpeg", caption: "E - Electric Toothbrush" },
    { src: "images/slideshow/notebook.jpeg", caption: "N - Notebook" }];

let currentIndex = 0;
const imgElement = document.getElementById("image");
const captionElement = document.getElementById("caption");
captionElement.style.color = "white";

function updateImage() {
    imgElement.src = slides[currentIndex].src;
    captionElement.textContent = slides[currentIndex].caption;
}

function showFirst() {
    currentIndex = 0;
    updateImage();
}

function showLast() {
    currentIndex = slides.length - 1;
    updateImage();
}

function prevImage() {
     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateImage();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateImage();
}
updateImage();