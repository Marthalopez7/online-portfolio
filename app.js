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

  // carousel contact page
