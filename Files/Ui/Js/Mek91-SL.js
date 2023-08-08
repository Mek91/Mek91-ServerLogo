const sourceImage = document.getElementById("Mek91-SL");
const colorCanvas = document.getElementById("Mek91-SL-ColorCanvas");
const ctx = colorCanvas.getContext("2d");

colorCanvas.width = sourceImage.width;
colorCanvas.height = sourceImage.height;
ctx.drawImage(sourceImage, 0, 0);

const imageData = ctx.getImageData(0, 0, colorCanvas.width, colorCanvas.height);
const pixels = imageData.data;

let redTotal = 0;
let greenTotal = 0;
let blueTotal = 0;
let pixelCount = 0;

for (let i = 0; i < pixels.length; i += 4) {
    redTotal += pixels[i];
    greenTotal += pixels[i + 1];
    blueTotal += pixels[i + 2];
    pixelCount++;
}

const avgRed = Math.floor(redTotal / pixelCount);
const avgGreen = Math.floor(greenTotal / pixelCount);
const avgBlue = Math.floor(blueTotal / pixelCount);

const shadowColor = `rgba(${avgRed}, ${avgGreen}, ${avgBlue})`;

sourceImage.style.filter = `drop-shadow(5px 5px 5px ${shadowColor})`;