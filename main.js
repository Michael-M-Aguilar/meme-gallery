var imageUrls = [];
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', eventClicked)
function eventClicked() {
  console.log(document.getElementById("imageUrlInput").value)
}
imageUrls.push(imageUrlInput.value)
