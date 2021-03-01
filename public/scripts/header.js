
var scrollPoint = 260;
var scrollStart = 260;

// Scroll event handler handle sticky header.
window.onscroll = function () {
	if (window.scrollY > 80) {
        //$(".logo").slideUp();
        $(".links").addClass("sticky");
	} else {
        //$(".logo").slideDown();
        $(".links").removeClass("sticky");
    }

    if (window.scrollY > scrollPoint && window.scrollY > scrollStart) {
        $(".links").slideUp();
        scrollPoint = window.scrollY;
    } else {
        $(".links").slideDown();
        scrollPoint = window.scrollY;
    }
};

menuOpen = false;

function toggleMobileNav() {
    if (menuOpen) {
        $(".mobile-nav-container").slideUp();
        menuOpen = false;
    } else {
        $(".mobile-nav-container").slideDown();
        menuOpen = true;
    }
}