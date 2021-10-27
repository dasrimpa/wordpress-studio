jQuery(document).ready(function() {
    var navToggle = jQuery('#dropbtn');
    var nav = jQuery('.dropdown-content');

    navToggle.on('click', function(e) {

        nav.slideToggle();
    });
})