
function controlMascot(wallpaper, wallpaperMinWidth) {
  $(window).resize(function(event) {
    if ( $(window).width() <= wallpaperMinWidth && $("main").hasClass("wallpaper") ) {
      removeMascot();
    } else if( $(window).width() > wallpaperMinWidth && ! $("main").hasClass("wallpaper") ) {
      setMascot(wallpaper);
    }
  });
}


function setMascot(wallpaper) {
  $('main').addClass("wallpaper");
  $('main').css("background-image", "url(" + wallpaper + ")");
  $('main').removeClass("plain");
}


$(document).ready(function(event) {
  var wallpaperEnable    = true;

  var wallpaper = wallpaperPath;
  var wallpaperMinWidth  = 800;

  setMascot(wallpaper);
  controlMascot(wallpaper, wallpaperMinWidth);

});
