//Set initial image
let starter = document.getElementById("starter");

//Set rest of images in array
let heartArray = ["assets/Asset20.png", "assets/Asset21.png", "assets/Asset22.png", "assets/Asset23.png", "assets/Asset24.png", "assets/Asset25.png", "assets/Asset26.png", "assets/Asset27.png"];

//Set a counter variable
let count = 0;

//Declare animate function
function animate(){
    //Select initial image
    starter.src = heartArray[count];
    //Increment through array
    count++;
    //Increase count through full length of array
    if (heartArray.length == count) {
        //Reset and start over
        count = 0;
    }
}


setInterval(animate, 100)
//Text animation
gsap.from(".headline", {
    duration: 1.5,
    stagger: 2.5,
    opacity: 0,
    y: 150
})

gsap.from(".paragraph1", {
    duration: 2.5,
    stagger: 2.5,
    opacity: 0,
    y: 150
})

gsap.from(".glow", {
    duration: 2.5,
    stagger: 2.5,
    opacity: 0,
    y: 200
})

gsap.from(".paragraph3", {
    duration: 2.5,
    stagger: 2.5,
    opacity: 0,
    y: 200
})