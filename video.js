let video = document.querySelector('.video');
let play = document.querySelector('.play');
let pause = document.querySelector('.pause');
let stop = document.querySelector('.stop');
let barre = document.querySelector('.barre');
video.play();

play.addEventListener("click", function(){
        video.play();
});
pause.addEventListener("click", function(){
        video.pause();
});
stop.addEventListener("click", function(){
        video.pause();
        video.currentTime = 0
});

function SetVolume(val){
        video.volume = val/100;
}

video.addEventListener("timeupdate",()=>{
        let ratio = video.currentTime / video.duration;
        barre.style.transform = "scaleX("+ ratio + ")";
});