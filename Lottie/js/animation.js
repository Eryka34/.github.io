//Create Variables
let animationMonster = document.getElementById("animationMonster");
let animationToggle = document.getElementById("animationToggle");
let toggle_c = 0;

//Get Monster from Lottie
let monster =
    bodymovin.loadAnimation({
          container: animationMonster,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: "https://lottie.host/3eeaea5e-1cc5-4b21-a30b-062e9b7a80c8/9MOMIdYdAG.json"
        });

//Get Toggle Switch from Lottie
let toggle =
        bodymovin.loadAnimation({
            container: animationToggle,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: "https://lottie.host/6fac6fbd-fb0b-4792-aff8-1a5283710d57/hxix1ihQqN.json"
        });

//Monster emotes with event listeners
//Play excited frames

animationToggle.addEventListener('click', function() {
    if (toggle_c == 0) {
        toggle.playSegments([1, 20], true);
        toggle_c = toggle_c + 1;
    } else {
        toggle.playSegments([21,60], true);
        let toggle_c = 0; 
    }
})


animationToggle.addEventListener('click', function() {
    monster.playSegments([110, 215], true);
});

animationMonster.addEventListener('mouseleave', function() {
    monster.playSegments([99, 211],true);
});

animationMonster.addEventListener('mouseenter', function() {
    monster.playSegments([256, 300],true);
});