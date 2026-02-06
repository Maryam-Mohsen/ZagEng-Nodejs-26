let images = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg"];  
let index = 0;

function nextImage() {
    index++;
    if (index >= images.length) {
        index = 0;  
    }
    document.getElementById("galleryImg").src = images[index];  
}
function prevImage() {
    index--;
    if (index < 0) {
        index = images.length - 1;  
    }
    document.getElementById("galleryImg").src = images[index];
}

function resetImage() {
    index = 0;
    document.getElementById("galleryImg").src = images[index]; } 
