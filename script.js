// Optional JS for smooth scrolling
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if(this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
