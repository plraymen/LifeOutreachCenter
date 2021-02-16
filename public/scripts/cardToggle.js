function toggleCard(element) {
    var collapsed = element.hasClass("collapsed");

    // Collapses all cards.
    $(".card").addClass("collapsed");
    $(".card").removeClass("expanded");
    $(".card-details").addClass("collapsed");
    $(".card-details").removeClass("expanded");

    if (collapsed) {
        element.addClass("expanded");
        element.removeClass("collapsed");

        element.find(".card-details").addClass("expanded");
        element.find(".card-details").removeClass("collapsed");
    } else {
        element.addClass("collapsed");
        element.removeClass("expanded");

        element.find(".card-details").addClass("collapsed");
        element.find(".card-details").removeClass("expanded"); 
    }

    // Scrolls to card
    $('html, body').animate({
        scrollTop: $(element).offset().top
      }, 500);
}


function cancelToggle(event) {
    event.stopPropagation();
}