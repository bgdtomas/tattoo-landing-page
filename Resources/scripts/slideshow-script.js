var acc = document.getElementsByClassName("collapsibleButton");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// //----------------------------------------------------------------

var slideIndexGallery = 1;
showSlidesGallery(slideIndexGallery);

// Next/previous controls
function plusSlidesGallery(n) {
  if (document.body.style.width <= 900) {
    showSlidesGallery((slideIndexGallery += n));
  }
}

// Thumbnail image controls
function currentSlideGallery(n) {
  showSlidesGallery((slideIndexGallery = n));
}

function showSlidesGallery(n) {
  var i;
  var slides = document.getElementsByClassName("galleryImgs");
  if (n > slides.length) {
    slideIndexGallery = 1;
  }
  if (n < 1) {
    slideIndexGallery = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexGallery - 1].style.display = "block";
}
