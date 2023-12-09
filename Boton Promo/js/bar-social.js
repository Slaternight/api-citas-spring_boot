function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

    window.addEventListener('scroll', function() {
    const button = document.querySelector('.float-botton-rrss');

    if (window.scrollY > 300) {
      button.style.opacity = '1';
    
      button.style.transition = '1s'
    } else {
      button.style.opacity = '0'; 
      button.style.transition = '1s'
    }
  });