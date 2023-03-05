var videos = ['ArR-ctuKraE'];
var randomIndex = Math.floor(Math.random() * videos.length);
var videoUrl = 'https://www.youtube.com/embed/' + videos[randomIndex] + '?autoplay=1&loop=1&controls=0&mute=1&modestbranding=1';
var video = document.getElementById('video');
video.src = videoUrl;

var fullscreenButton = document.getElementById('fullscreen-button');

if (fullscreenButton) {
  fullscreenButton.addEventListener('click', function() {
    if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }
  });
}

var placeholder = document.createElement('div');

document.addEventListener('fullscreenchange', function() {
  if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
    if (fullscreenButton) {
      video.parentNode.insertBefore(placeholder, fullscreenButton);

      fullscreenButton.parentNode.removeChild(fullscreenButton);
    }
  } else {
    if (fullscreenButton && placeholder.parentNode) {
      placeholder.parentNode.insertBefore(fullscreenButton, placeholder.nextSibling);

      placeholder.parentNode.removeChild(placeholder);

      fullscreenButton.addEventListener('click', function() {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen();
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
        }
      });
    }
  }
});
