//1st js element click the button to change the text
 function textChange(){
    document.getElementById('t_change').innerHTML="Hellow World!";
 }

 //2nd js element Click me to display Date and Time
 function showDate(){
    document.getElementById('s_date').innerHTML=Date();
}

 //ex-3 js element Click me to display Date and Time

function bulbOff(){
    document.getElementById('blub_off').src="images/pic_bulboff (1).gif";
}
function bulbOn(){
    document.getElementById('blub_off').src="images/pic_bulbon.gif on.gif";
}
 
 //ex-4 js element click to change opacity the picture
function blurOff(){
    document.getElementById('no_blur').style.opacity='1'; 
 }
 function blur50(){
    document.getElementById('no_blur').style.opacity='.5';
 }
 function blur100(){
    document.getElementById('no_blur').style.opacity='.1'; 
 }

  //ex-5 js  click to change  paragraph font-size and color


  function fontSize(){
    document.getElementById('font_size').style.fontSize='30px';
    document.getElementById('font_size').style.color='red';
  }
  function backOrginal(){
    document.getElementById('font_size').style.fontSize='16px';
    document.getElementById('font_size').style.color='#000';
  }

 //ex-6  click to show the hidden HTML
 function hiddenHTML(){
    document.getElementById('hidden_p').style.display='block';
 }
 //ex-7  show onmouseover effect
 function textHover(){
    document.getElementById('text_hover').style.fontSize='30px';
    document.getElementById('text_hover').style.transition='.9s';
 }

  //ex-8  show mouseenter and mouseleave effect
  function hoverText(){
    document.getElementById('texthover').style.fontSize='30px';
    document.getElementById('texthover').style.transition='.3s';
 }
 function normalText(){
   document.getElementById('texthover').style.fontSize='16px';
   document.getElementById('texthover').style.transition='.3s';
 }
  //ex-9  show mouseenter and mouseleave effect
 function imgEnter(){
   document.getElementById('img_hover').style.width='400px';
   document.getElementById('img_hover').style.height='400px';
   document.getElementById('texthover').style.transition='.5s';
 }
 function imgLeave(){
   document.getElementById('img_hover').style.width='200px';
   document.getElementById('img_hover').style.height='200px';
   document.getElementById('texthover').style.transition='.5s';
 }
//ex-10  JavaScript Output
document.getElementById('calculation').innerHTML=5+9;
document.getElementById('calculation').alert='(5 + 6)';
//ex-11  JavaScript Output
function plusCal(){
   document.write(9+5);
}
//ex-12  JavaScript Output and alart

function alertSolve(){
   window.alert("18");
}

//ex-13  click the button to print
function windowPrint(){
   window.print('print');
}
//ex-14  console log
function consoleLog(){
   console.log("Hello! I am Console Log");
}

//ex-15 JavaScript statements are separated by semicolons with let 
function jsStatement(){
   let x, y, z;
   y=9;
   z=8;
   x=y+z;
   document.getElementById('js_satement').innerHTML = x;
}

//ex-16 JavaScript statements are separated by semicolons with var 
function jsVar(){
   var x, y, z;
   y=9;
   z=8;
   x=y*z;
   document.getElementById('js_var').innerHTML = x;
}
//ex-17 JavaScript statements are separated by semicolons with cons
const cars = ["Saab", "Volvo", "BMW"];
function jsCons(){
   document.getElementById('js_cons').innerHTML=cars;
}

//ex-18 JavaScript statements are separated by semicolons with var 


function jsString(){
   var x = document.getElementById("S_number").value;
   document.getElementById('s_value').innerHTML=x;
}

//ex-19 JavaScript input lessthan 100 is Applicable 


function jsLogicalNumber(){
   var x = document.getElementById("l_number").value;

   var x;
   if(x<100){
      l_value="Applicable";
   }
   else if(x>100){
      l_value="Not applicable";
   }
   else{
      l_value= "Welcome";
   }
   
   document.getElementById('l_value').innerHTML=l_value;
}

//ex-19 JavaScript input number Comparison


function comValue(){
   var a = document.getElementById('a').value; 
   a = parseFloat(a);
   var b = document.getElementById('b').value;
   b = parseFloat(b);

   var com_value;

   if(a>b){
      com_value = ">";
   }
   else if (a>b){
      com_value = "<";
   }
   else{
      com_value = "=";
   }

document.getElementById('com_value').innerHTML= com_value;
}
















//ex-17 JavaScript statements are separated by semicolons with var 


function carPrice(){
   var x = document.getElementById("car_name").value;
   document.getElementById('price').innerHTML=x + "Taka";
}