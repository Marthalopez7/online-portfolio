const overlay = document.getElementById('overlay')
const popUpOne = document.getElementById('popup-m1')
const closeButton = document.getElementById('close-button')
const movieTextOne = document.getElementById('popup-content')


closeButton.onclick = function() {
    overlay.style.display = 'none';
    popUpOne.style.display = 'none';
}

closeButton.onclick = function () {
    overlay.style.display = 'block';
    popUpOne.style.display = 'block';
}