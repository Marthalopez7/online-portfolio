// slideshow home
var i = 0
var images = [];
var time = 5000;

images[0] = 'images/a-wish-from-the-earth-icon.jpg'
images[1] = 'images/battlewitch-icon.jpg'
images[2] = 'images/delvehomes-icon.jpg'
images[3] = 'images/pursuit-of-healthyness-poster-icon.jpg'
images[4] = 'images/gov-video.jpg'
images[5] = 'images/Career-research-essay.jpg'
images[6] = 'images/reflective-essay.jpg'

function slideshow() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0
    }
    setTimeout('slideshow()', time)

}
window.onload = slideshow

// pop-ups
// var imgbuttons = document.querySelectorAll('.modal-open');

// imgbuttons.forEach(function(btn) {
//     btn.onclick = function() {
//         var modal = btn.getAttribute('data-modal');
//         document.getElementById(modal).style.display = "block";
        
//     };
// });
// const imgbtn1 = document.getElementById('#button1')
// const imgbtn2 = document.getElementById('#button2')
// const imgbtn3 = document.getElementById('#button3')
// const imgbtn4 = document.getElementById('#button4')
// const imgbtn5 = document.getElementById('#button5')
// const imgbtn6 = document.getElementById('#button6')
// const imgbtn7 = document.getElementById('#button7')
// const imgbtn8 = document.getElementById('#button8')
// const imgbtn9 = document.getElementById('#button9')
// const imgbtn10 = document.getElementById('#button10')
// const imgbtn11= document.getElementById('#button11')
// const imgbtn12 = document.getElementById('#button12')
// const imgbtn13 = document.getElementById('#button13')
// const imgbtn14 = document.getElementById('#button14')
// const imgbtn15 = document.getElementById('#button15')
// const imgbtn16 = document.getElementById('#button16')

 const btns = document.querySelectorAll('[data-target]')
 const overlay = document.getElementById('overlay')
 const closebtn = document.querySelectorAll(".close-modal");

 btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector(btn.dataset.target).classList.add("active");
      overlay.classList.add("active");
    });
  });

  closebtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      modal.classList.remove("active");
      overlay.classList.remove("active");
    });
  });

  window.onclick = (event) => {
    if (event.target == overlay) {
      const modals = document.querySelectorAll(".modal");
      modals.forEach((modal) => modal.classList.remove("active"));
      overlay.classList.remove("active");
    }
  };