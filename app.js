// slideshow home
var i = 0
var pics = [];
var time = 5000;

pics[0] = 'images/a-wish-from-the-earth-icon.jpg'
pics[1] = 'images/battlewitch-icon.jpg'
pics[2] = 'images/delvehomes-icon.jpg'
pics[3] = 'images/pursuit-of-healthyness-poster-icon.jpg'
pics[4] = 'images/gov-video.jpg'
pics[5] = 'images/Career-research-essay.jpg'
pics[6] = 'images/reflective-essay.jpg'

function slideshow() {
    document.slide.src = pics[i];
    if (i < pics.length - 1) {
        i++;
    } else {
        i = 0
    }
    setTimeout('slideshow()', time)

}
window.onload = slideshow

// pop-ups about page
 const btns = document.querySelectorAll('[data-target]')
 const overlay = document.getElementById('overlay')
 const closebtn = document.querySelectorAll(".close-modal")

 btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector(btn.dataset.target).classList.add("active")
      overlay.classList.add("active")
    })
  })

  closebtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal")
      modal.classList.remove("active");
      overlay.classList.remove("active")
    })
  })

  window.onclick = (event) => {
    if (event.target == overlay) {
      const modals = document.querySelectorAll(".modal");
      modals.forEach((modal) => modal.classList.remove("active"))
      overlay.classList.remove("active")
    }
  }

// carousel contact
// const slider = document.querySelector('.image-slider')
// const arrLeft = document.querySelector('.arrow-left')
// const arrRight = document.querySelector('.arrow-right')

// const images = [
//   'images/a-wish-from-the-earth-icon.jpg',
//   'images/battlewitch-icon.jpg', 
//   'images/delvehomes-icon.jpg'
// ];

// let id = 0;

// function slide(id) {
//   slider.style.backgroundImage = `url(img/${images[id]})`;
//   slider.classList.add('image-fade');
//   setTimeout(() => {
//     slider.classList.remove('image-fade');
//   }, 550);
// }

// arrLeft.addEventListener('click', () => {
//   id--;

//   if(id < 0) {
//     id = images.length - 1;
//   }
//   slide(id);
// });

// arrRight.addEventListener('click', () => {
//   id++;

//   if(id > images.length - 1) {
//     id = 0;
//   }
//   slide(id);
// });