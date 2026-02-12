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
