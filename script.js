// define an array of YouTube video IDs
var videos = [
    'LXb3EKWsInQ' // video 1

  ];
  
  // generate a random index into the videos array
  var randomIndex = Math.floor(Math.random() * videos.length);
  
  // construct the YouTube embed URL with the selected video ID and the mute parameter
  var videoUrl = 'https://www.youtube.com/embed/' + videos[randomIndex] + '?autoplay=1&loop=1&controls=0&mute=1&modestbranding=1';
  
  // set the iframe src attribute to the video URL
  var video = document.getElementById('video');
  video.src = videoUrl;
  