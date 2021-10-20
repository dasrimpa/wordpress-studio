jQuery(document).ready(function() {
    var navToggle = jQuery('#nav_toggle');
    var nav = jQuery('.dropdown-content');
    
    navToggle.on('click', function() {
      nav.slideToggle();
    });
})
