
function controlWallpaper(wallpaper, wallpaperMinWidth) {
  $(window).resize(function(event) {
    if ( $(window).width() <= wallpaperMinWidth && $("main").hasClass("wallpaper") ) {
      removeWallpaper();
    } else if( $(window).width() > wallpaperMinWidth && ! $("main").hasClass("wallpaper") ) {
      setWallpaper(wallpaper);
    }
  });
}


function setWallpaper(wallpaper) {
  $('main').addClass("wallpaper");
  $('main').css("background-image", "url(" + wallpaper + ")");
  $('main').removeClass("plain");
}

 function removeWallpaper() {
  $('main').removeClass("wallpaper");
  $('main').css("background-image", "");
  $('main').addClass("plain");
 }


$(document).ready(function(event) {
  var wallpaperEnable    = true;

  var wallpaper = wallpaperPath;
  var wallpaperMinWidth  = 800;

  if (wallpaperEnable) {
    setWallpaper(wallpaper);
    controlWallpaper(wallpaper, wallpaperMinWidth);
  } else { 
    removeWallpaper(); 
  }
});
