let count=0;
let circle=document.createElement("div");
let btn= document.querySelector("button");
btn.addEventListener(click,startGame);

function startGame()
{
circle.toggle("circle");
document.body.appendChild(circle);
circle.style.top="100";
circle.style.left="300";


}