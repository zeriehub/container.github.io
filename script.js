/* 
 * Name: Merehaw Zerie
 * Student ID: 3044369
 */
"use strict";


let base=prompt("Enter Base.","");
let power=prompt("Enter Power","");
let result=1;
pow(base, power);

function pow(base, power){
    for(let i=0; i<power; i++){
        result*=base;
    }
   alert( `your result is: ${result}`);
   return result;
}




let asser=require("chai").assert;

describe ("pow",function () {
    it("raises to n-th power", function(){
        assert.equal(pow(4,2),16 );
        assert.equal(pow(3,4),81);
    });
});














//function hello(name) {
//  let phrase = `Hello, ${name}!`;
//
//  say(phrase);
//}
//
//function say(phrase) {
//  alert(`** ${phrase} **`);
//}































//function showQuestion(question, yes, no)
//{
// if(confirm(question))
//   yes();
// else
//   no();
//}
//
//
//function yes()
//{
//    alert ("You selected yes.");
//    
//}
//
//function no()
//{
//    alert("You selected No");
//}
//
//
//showQuestion("Are you alive?",()=>alert("You SSelected Yes"),()=>alert("You Sselected No"));

















//let checkAge=function (age) {
//  if (age > 18) {
//    return true;
//  } else {
//    return confirm('Did parents allow you?');
//  }
//  
//    (age>18)||confirm("Did parents allow you?");
//};
//
//alert(checkAge);









//printName("Merhawi");
//
//function printName(name, other=noSecondPar())
//{
//    alert(`Hello ${name}`);
//}
//
//function noSecondPar()
//{
//    alert("No second parameter was enetered.");
//}






//let number=+prompt("Enter a Number.");
//let counter=0;
//for(let i=2;i<number;i++)
//{
//    counter=0;
//    for(let j=1;j<=i;j++)
//    {
//        if(i%j===0)
//            {counter++;}
//    }   
//    
//    if(counter===2)
//        console.log(i);
//}











//let booleanValue=true;
//alert(typeof booleanValue);
//booleanValue=String(booleanValue);
//alert(typeof(booleanValue));
