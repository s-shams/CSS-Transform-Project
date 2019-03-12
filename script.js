document.querySelector(".btn").addEventListener('click', move);
function move(){
    setInterval(build, 1);
    }
    var pixel = 0;
function build(){
    pixel++;
    document.querySelector(".translate-left").style = "transform: translateX(" +pixel+"px);";
    setInterval(grow, 2000);
    }
function grow(){
    document.querySelector(".car").style = "transform: rotateY(180deg) scale(2);";
    }