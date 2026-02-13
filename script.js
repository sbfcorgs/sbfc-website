let currentIndex = 0;

const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg"
];

function openModal(index){
  currentIndex = index;
  document.getElementById("imageModal").style.display = "block";
  document.getElementById("modalImg").src = images[currentIndex];
}

function closeModal(){
  document.getElementById("imageModal").style.display = "none";
}

function changeSlide(direction){
  currentIndex += direction;

  if(currentIndex < 0){
    currentIndex = images.length - 1;
  }

  if(currentIndex >= images.length){
    currentIndex = 0;
  }

  document.getElementById("modalImg").src = images[currentIndex];
}
