const overlay = document.getElementById('overlay')
const popUpOne = document.getElementById('popup')
const closeButton = document.getElementById('popupclose')
const button = document.getElementById('button')


closeButton.onclick = function() {
    overlay.style.display = 'none';
    popUpOne.style.display = 'none';
}

button.onclick = function () {
    overlay.style.display = 'block';
    popUpOne.style.display = 'block';
}