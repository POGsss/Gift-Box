window.addEventListener("load", function(){
  setTimeout(loaded, 2500);
    
  function loaded(){
     	var load = document.getElementById("loader");
     	load.style.left = "-100%";
     	load.style.borderRight = "100px solid #D1193E";
    	load.style.visibility = "hidden";
  }
});

const wrapper = document.querySelector('.wrapper');
let openTimeout, closeTimeout;

wrapper.addEventListener('mouseenter', () => {
	clearTimeout(closeTimeout);
  	openTimeout = setTimeout(() => {
    	wrapper.classList.remove('close');
    	wrapper.classList.add('open');
  	}, 1000);
});

wrapper.addEventListener('mouseleave', () => {
  	clearTimeout(openTimeout);
  	closeTimeout = setTimeout(() => {
    	wrapper.classList.remove('open');
    	wrapper.classList.add('close');
  	}, 1000);
});