function setup() {
    createCanvas(710, 400);
    background(1000);
    strokeWeight(8);
    colorMode(HSB);
    describe('A blank canvas where the user draws by dragging the mouse');
}
  
function mouseDragged() {
    let lineHue = mouseX - mouseY;
    stroke(lineHue, 90, 90);
    line(pmouseX, pmouseY, mouseX, mouseY);
}

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {
    setup();
});
