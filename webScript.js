let count=0;
let wid=screen.width;
let height= screen.height;
let

let btn= document.querySelector("button");
btn.addEventListener("click",startGame);

function startGame()
{
    let circle=document.createElement("div");
    let randomNumber=Math.random();
    circle.setAttribute("class","circle");

    circle.style.top= (height* randomNumber);
    circle.style.left=(wid * randomNumber);
    document.body.appendChild(circle);

}