//Variables for lightbox elements
let lightboxContainer = document.getElementById('lightboxContainer');
let lightboxBackground = document.getElementById('lightboxBackground');
let lightbox = document.getElementById('lightbox');
let lightboxCloser = document.getElementById('lightboxCloser');

//Function to open lightbox
function openLightbox() {
    //Turn on display class (from display:none to display: flex)
    lightboxContainer.classList.add('display');
    //Display image src inside lightbox
    lightbox.src = this.src;
}

let coffeeImage = document.getElementById('coffee_L1');
//When you click image, reference openLightbox function 

coffeeImage.onclick = openLightbox;
coffee_L2.onclick = openLightbox;
coffee_L3.onclick = openLightbox;
coffee_L4.onclick = openLightbox;
coffee_P1.onclick = openLightbox;
coffee_P2.onclick = openLightbox;
coffee_P3.onclick = openLightbox;
coffee_P4.onclick = openLightbox;
coffee_S1.onclick = openLightbox;
coffee_S2.onclick = openLightbox;
coffee_S3.onclick = openLightbox;

//Make Function to make closer clickable
function closeLightbox() {
    lightboxContainer.classList.remove('display');
    lightbox.src = "";
}


lightboxBackground.onclick = closeLightbox;
lightboxCloser.onclick = closeLightbox;