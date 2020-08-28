let isMobile = window.matchMedia("(max-width: 576px)");
var shareIconWrapper = $(".share-icon-wrapper");

mediaQueryCheck(isMobile);
isMobile.addListener(mediaQueryCheck);

shareIconWrapper.popover({
  trigger: "focus",
  placement: "top",
  html: true,
  content: '<div class="popover-content"><p>S H A R E</p><a href="https://www.facebook.com"><img class="social-icon" src="images/icon-facebook.svg" alt="Facebook-Icon"></a><a href="https://www.twitter.com"><img class="social-icon" src="images/icon-twitter.svg" alt="Twitter-Icon"></a><a href="https://www.pinterest.com"><img class="social-icon" src="images/icon-pinterest.svg" alt="Pinterest-Icon"></a></div>'
});

shareIconWrapper.focusin(function() {
  $("span").toggleClass("icon-on-focus");
  $(".share-icon path").attr("fill", "hsl(210, 46%, 95%)");
});

shareIconWrapper.focusout(function() {
  $("span").toggleClass("icon-on-focus");
  $(".share-icon path").attr("fill", "#6E8098");
});

function mediaQueryCheck(x) {
  if (x.matches) {
    shareIconWrapper.popover('toggleEnabled');
    shareIconWrapper.focusin(function() {
      $(".share-bar-mobile").css("display", "flex");
    });
    shareIconWrapper.focusout(function() {
      $(".share-bar-mobile").hide();
    });
  }
  else {
  }
}
