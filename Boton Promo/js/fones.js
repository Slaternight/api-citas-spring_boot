$(document).ready(function() {
    $('#selectToggle').hover(
        function() {
            $('#selectOptions').css('display', 'block');
        },
        function() {
            $('#selectOptions').css('display', 'none');
        }
    );
});
