// $(document).ready(function(){

// 	$('.ancla').click(function(){
// 		$('body, html').animate({
// 			scrollTop: '0px'
// 		}, 300);
// 	});

// 	$(window).scroll(function(){
// 		if( $(this).scrollTop() > 0 ){
// 			$('.ancla').slideDown(300);
// 		} else {
// 			$('.ancla').slideUp(300);
// 		}
// 	});

// });

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Para un desplazamiento suave
    });
  }

    window.addEventListener('scroll', function() {
    const button = document.querySelector('.ancla');

    if (window.scrollY > 100) {
      button.style.opacity = '1'; // Si se desplaza hacia abajo, muestra el botón
    //   button.style.transition = '0.8s'
    } else {
      button.style.opacity = '0'; // Si está en la parte superior, oculta el botón
    //   button.style.transition = '0.8s'
    }
  });