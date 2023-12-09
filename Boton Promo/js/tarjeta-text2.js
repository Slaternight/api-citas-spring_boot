$(document).ready(function() {
    $('.description21').each(function() {
        const $this = $(this);
        const originalText = $this.text();
        const maxLength = 100;

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