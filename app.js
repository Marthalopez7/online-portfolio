// const overlay = document.getElementById('overlay')
// const popUpOne = document.getElementById('popup')
// const closeButton = document.getElementById('popupclose')
// const button = document.getElementById('button')


// closeButton.onclick = function() {
//     overlay.style.display = 'none';
//     popUpOne.style.display = 'none';
// }

// button.onclick = function () {
//     overlay.style.display = 'block';
//     popUpOne.style.display = 'block';
// }

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

// var imgbuttons = document.querySelectorAll('#button');

// imgbuttons.forEach(function(btn) {
//     btn.onclick = function() {
//         var modal = btn.getAttribute('data-modal');
//         document.getElementById('modal1').style.display = "block";
        
//     };
// });
