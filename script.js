function openImage(img){
  document.getElementById("imageModal").style.display="block";
  document.getElementById("modalImg").src=img.src;
}

function closeImage(){
  document.getElementById("imageModal").style.display="none";
}
