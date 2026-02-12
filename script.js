// Example: Animate Welcome Text
const welcome = document.querySelector('.welcome-text');
let opacity = 0;
let increasing = true;
setInterval(()=>{
  if(opacity >= 1) increasing=false;
  if(opacity <= 0.3) increasing=true;
  opacity += increasing ? 0.01 : -0.01;
  welcome.style.opacity = opacity;
}, 30);
console.log("SBFC Organization Website Loaded Successfully");
// Dynamic image grid
const homeGallery = document.getElementById("home-gallery");
for (let i = 1; i <= 9; i++) {
  const div = document.createElement("div");
  div.className = "grid-item";
  const img = document.createElement("img");
  img.src = `https://picsum.photos/400/300?random=${i}`;
  div.appendChild(img);
  homeGallery.appendChild(div);
}


