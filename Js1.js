/* 
 * Name: Merehaw Zerie
 * Student ID: 3044369
 */
"use strict";

//let booleanValue=true;
//alert(typeof booleanValue);
//booleanValue=String(booleanValue);
//alert(typeof(booleanValue));


let number=+prompt("Enter a Number.");
let counter=0;
for(let i=2;i<number;i++)
{
    counter=0;
    for(let j=1;j<=i;j++)
    {
        if(i%j===0)
            {counter++;}
    }   
    
    if(counter===2)
        console.log(i);
}