jQuery(document).ready(function() {
    var navToggle = jQuery('#nav_toggle');
    var nav = jQuery('.header-right');

    navToggle.on('click', function(e) {
        e.preventDefault();
        nav.slideToggle();
    });
})