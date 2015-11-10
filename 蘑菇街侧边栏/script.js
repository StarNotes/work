var main = document.querySelectorAll("#main-nav li");
var sub = document.getElementsByClassName("sub-nav");
// function whichEnter(event){
// 	var index = parseInt(event.target.getAttribute("index"));
// 	sub[index].style.display="block";
// }
// function whichLeave(event){
// 	var index = parseInt(event.target.getAttribute("index"));
// 	sub[index].style.display="none";
// }



// for(var i=0; i< main.length; i++){
// 	main[i].onmouseenter=function(e){
// 		var index = parseInt(event.target.getAttribute("index"));
// 		sub[index].style.display="block";
// 	};
// 	main[i].onmouseleave=function(e){
// 		var index = parseInt(event.target.getAttribute("index"));
// 		sub[index].style.display="none";
// 	};
// }



function f1() { 
  var main = document.querySelectorAll("#main-nav li");
  var sub = document.getElementsByClassName("sub-nav");
  for( var i=0; i<main.length; i++ ) { 
    main[i].onmouseenter = (function(j) { 
      return function() {//返回一个函数 
        sub[j].style.display="block";
      }; 
    })(i); 
     main[i].onmouseleave= (function(j) { 
      return function() {//返回一个函数 
        sub[j].style.display="none";
      }; 
    })(i);
  } 
} 
f1();
