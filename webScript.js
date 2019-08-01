let count=0;
let wid=screen.width;
let height= screen.height;
let box=document.querySelectorAll(".student");
box.addEventListener("mouseenter",zoomin);
box.addEventListener("mouseleave",zoomout);

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


function zoomin()
{
box.style.width="120px";
ox.style.height="120px";

}

function zoomout()
{
box.style.width="100px";
box.style.height="100px";
}
