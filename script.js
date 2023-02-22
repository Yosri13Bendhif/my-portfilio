


const body = document.querySelector("body");
const toggle = document.getElementById("toggle");
 toggle.onclick = function(){
  //  body.style.background= "black";
    toggle.classList.toggle("active");
    body.classList.toggle("active")
 }





 // TeXT ANIMATION
/*
 var mytext= 'tytmtgyyopmoi';
 i = 0;

 function dynam() {
  'use strict';

  
  var typewriter= setInterval(function(){


    document.querySelector(".text").textContent += mytext[i];
    i= i + 1;
    
    if (i>mytext.length -1 ) {

clearInterval(typewriter);
    }

  },100);

 };  */
 //********************************


/*
 const text= querySelector(".text");

 const txt= 'rtgggggggggfg';
 const k = 0;
  const intervalId= setInterval(function(){
  text.innerHTML += txt[i];
 i++;

 if (i=== txt.length) {
  clearInterval(intervalId);
 }


  },50);
  //////////////////////////////

  var i = 0;
  var images= [];
 var time= 3000;

 images[0]='images.jpg';
 images[1]='images1.jpg';
 images[2]='images2.jpg';

 function changeImg() {
  var img =document.getElementById("img");
  img= images[k];

  
  if (k < images.length -1) {
    k++;
    
  }else{
    k = 0;
  }
  setTimeout("changeImg()",time);
 }
 window.onload= changeImg;*/
 //////////////////////////////////////


// slidshow

 var i = 0;
var slidesImage= ["images1.jpg","images2.jpg","images4.jpg","images5.jpg","images6.jpg","images7.jpg","images8.jpg","images9.jpg","images10.jpg","images12.jpg"];


var slideshow= function(){

  document.slideshow.src = slidesImage[i];

  if (i < slidesImage.length -1) {
i++;


}else{
  i= 0 ;
}
setTimeout("slideshow()", 2000);

}
slideshow();
 
/////////////////////////////////


function updateClock() {

  var now= new Date();
  var dname= now.getDay,
  mo = now.getMonth(),
  dnum = now.getDate(),
  yr = now.getFullYear(),
  hou = now.getHours(),
  min = now.getMinutes(),
  sec = now.getSeconds(),
  pe = "AM";

  if (hou == 0)  {
    hou = 12;
  }

  
  if (hou > 12) {
hou = hou -12;
pe = "PM";

  }

  
  Number.prototype.pad = function(digits){

    for (var n = this.toString(); n.length < digits; n = 0 + n);  
         return n;
    


 
  }  



  var months = ["January","February","March","April","May","June","July","Augest","September","October","November","December"];
  var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var ids = ["dayname","month","daynum","year","hour", "minutes", "seconds", "period"];
  var values = [week[dname],months [mo], dnum.pad(2), yr, hou.pad(2) , min.pad(2), sec.pad(2), pe];


  for (let i = 0; i < ids.length; i++) {
  
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    
  }
  
  }



function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
  
}

