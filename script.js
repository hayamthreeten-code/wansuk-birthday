function playMusic(){
    document.getElementById("song").play();
}

function showMessage(){
    document.getElementById("message").style.display="block";
}

setInterval(() => {

let confetti = document.createElement("div");
confetti.innerHTML = "✨";
confetti.style.position = "fixed";
confetti.style.left = Math.random()*100 + "%";
confetti.style.top = "-10px";
confetti.style.fontSize = "30px";

document.body.appendChild(confetti);

let fall = setInterval(()=>{
confetti.style.top =
parseInt(confetti.style.top)+5+"px";

if(parseInt(confetti.style.top)>window.innerHeight){
clearInterval(fall);
confetti.remove();
}
},20);

},300);
