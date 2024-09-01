window.addEventListener("load", function(){
  setTimeout(loaded, 2500);
    
  function loaded(){
     	var load = document.getElementById("loader");
     	load.style.left = "-100%";
     	load.style.borderRight = "100px solid #D1193E";
    	load.style.visibility = "hidden";
  }
});