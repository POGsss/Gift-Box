const gift = document.getElementById("giftContainer");

let checker = false;
let numCount = 1;

window.addEventListener("load", function(){
  setTimeout(loaded, 2500);
});

function loaded(){
     	var load = document.getElementById("loader");
     	load.style.left = "-100%";
     	load.style.borderRight = "100px solid #D1193E";
    	load.style.visibility = "hidden";
}

function opening(){
  const popup = document.createElement('span');
  popup.classList.add('popup');
  popup.textContent = `${numCount}`;

  popup.style.left = `calc(${event.clientX}px - 25px)`;
  popup.style.top = `calc(${event.clientY}px - 25px)`;

  document.body.appendChild(popup);
  gift.style.transform = "translate(-50%, -50%) scale(0.9)";

  setTimeout(function() {
    gift.style.transform = "translate(-50%, -50%) scale(1)";
  }, 200);

  setTimeout(function() {
      popup.remove();
  }, 1000);

  if (numCount >= 100) {
    checker = true;
    openGift();
  } else {
    numCount++;
  }
}

function openGift(){
  if (checker == true) {
    gift.classList.add("open");
    setTimeout(function() {gift.style.height = "450px";}, 1000);
  } else {
    console.log(numCount);
    opening();
  }
}