splashTimer = 0;
splashNumber = 1;

function changeSplash(element) {
    image = $(element).attr("data-image");
    text = $(element).attr("data-text");
    number = $(element).attr("data-number");

    console.log(number);

    currentImage = $(".splash").attr("data-image");

    if (image != currentImage) {
        $(".splashSlider").css("background-image", "url(" + image + ")");
        $('.splashSlider').show();
        $('.splashSlider').animate({
            width: "100%"
        }, 600, function () {
            // Modify Main Image
            $(".splash").attr("data-image", image);
            $(".splash").css("background-image", "url(" + image + ")");

            // Hide Splash Slider
            $(".splashSlider").css("width", "0%");
            $(".splashSlider").hide();

            splashNumber = parseInt(number);
        });
        
        $(".splashDot").removeClass("active");
        $(element).addClass("active");

        $(".splashText").fadeOut(function () {
            $(".splashText").fadeIn();
            $(".splashText").html(text);
        });

        
    }
    
    splashTimer = 0;
    $(".splashTimerShadow").css("width", "0%");
}


window.setInterval(function () {
    splashTimer += 0.11;
    $(".splashTimerShadow").css("width", Math.round(splashTimer * 10) / 10 + "%");

    if (splashTimer >= 100) {
        splashNumber += 1;

        if (splashNumber == 4) { 
            splashNumber = 1;
        }

        changeSplash(document.querySelectorAll('[data-number="' + splashNumber + '"]')[0]);
    }
}, 10);