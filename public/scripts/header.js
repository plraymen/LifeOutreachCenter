var scrollPoint = 260;
var scrollStart = 260;

// Scroll event handler handle sticky header.
window.onscroll = function () {
    // Hides the header when scrolling on desktop.
	if (window.innerWidth >= 713) {
        if (window.scrollY > scrollPoint && window.scrollY > scrollStart) {
            $(".links").slideUp();
            scrollPoint = window.scrollY;
        } else {
            $(".links").slideDown();
            scrollPoint = window.scrollY;
        }
    }

    // Anchors the link header to top of screen when past the logo.
    if (window.scrollY > 80) {
        $(".links").addClass("sticky");
    } else {
        $(".links").removeClass("sticky");
    }
};

var menuOpen = false;

function toggleMobileNav() {
    if (menuOpen) {
        $(".mobile-nav-container").slideUp();
        menuOpen = false;
    } else {
        $(".mobile-nav-container").slideDown();
        menuOpen = true;
    }
}