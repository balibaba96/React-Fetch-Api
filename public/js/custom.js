jQuery(document).ready(function() {
    //Login screen slider
    jQuery('#login_screen').carousel({
        interval: 5000
    });
    jQuery('.schedule_section .top_filter .grid_view').click(function() {
        jQuery('.schedule_section .top_filter li').removeClass('active');
        jQuery(this).addClass('active');
        jQuery('.schedule_listing').addClass('grid_listing').removeClass('list_listing');
        jQuery('.schedule_items .col-md-12').addClass('col-md-3').removeClass('col-md-12');
    });
    jQuery('.schedule_section .top_filter .list_view').click(function() {
        jQuery('.schedule_section .top_filter li').removeClass('active');
        jQuery(this).addClass('active');
        jQuery('.schedule_listing').addClass('list_listing').removeClass('grid_listing');
        jQuery('.schedule_items .col-md-3').addClass('col-md-12').removeClass('col-md-3');
    });

    var scroll = jQuery(document).scrollTop();
    var headerHeight = jQuery('#header-section').outerHeight();
    jQuery(window).scroll(function() {
        var scrolled = jQuery(document).scrollTop();

        if (scrolled > headerHeight) {
            jQuery('#header-section').addClass('off-canvas');
            jQuery('.moduletable.sub-menu-new').addClass('off-canvas');
        } else {
            jQuery('#header-section').removeClass('off-canvas');
            jQuery('.moduletable.sub-menu-new').removeClass('off-canvas');
        }

        if (scrolled > scroll) {
            jQuery('#header-section').removeClass('fixed');
            jQuery('.moduletable.sub-menu-new').removeClass('fixed');
        } else {
            jQuery('#header-section').addClass('fixed');
            jQuery('.moduletable.sub-menu-new').addClass('fixed');
        }
        scroll = jQuery(document).scrollTop();
    });



    jQuery('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        jQuery(this).parent().siblings().removeClass('open');
        jQuery(this).parent().toggleClass('open');
    });

    //create post

    jQuery('.acco_li > li').click(function() {
        jQuery(this).toggleClass('active');
    });

});