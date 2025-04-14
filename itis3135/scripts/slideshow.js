const slides = [
    { src: "images/slideshow/surfing.jpg", caption: "A - Austin" },
    { src: "images/slideshow/uniform.jpg", caption: "U - Uniform" },
    { src: "images/slideshow/shirt.jpg", caption: "S - Shirt" },
    { src: "images/slideshow/tennis_ball.jpg", caption: "T - Tennis Ball" },
    { src: "images/slideshow/imac.jpg", caption: "I - iMac" },
    { src: "images/slideshow/new_balance.jpg", caption: "N - New Balance" },
    { src: "images/slideshow/water_bottle.jpg", caption: "W - Water Bottle" },
    { src: "images/slideshow/airpods.jpg", caption: "A - AirPods" },
    { src: "images/slideshow/remote.jpg", caption: "R - Remote" },
    { src: "images/slideshow/ruler.jpg", caption: "R - Ruler" },
    { src: "images/slideshow/electric_toothbrush.jpg", caption: "E - Electric Toothbrush" },
    { src: "images/slideshow/notebook.jpg", caption: "N - Notebook" }];

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