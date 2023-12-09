$(document).ready(function() {
    $('.description').each(function() {
        const $this = $(this);
        const originalText = $this.text();
        const maxLength = 200; // Establece la longitud máxima permitida antes de truncar el texto

        if (originalText.length > maxLength) {
            const truncatedText = originalText.substring(0, maxLength) + '...';
            $this.text(truncatedText);
            $this.append(`<span class="show-more-link">Ver más</span>`);
        }

        $this.on('click', function() {
            $this.toggleClass('show-more');
        });
    });
});