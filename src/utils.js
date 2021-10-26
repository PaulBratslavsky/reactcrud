function getVideoIdFromURL(url) {
  const VID_REGEX = new RegExp( 
/(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return url.match(VID_REGEX)[1];
}

function selectedVideo(videos, videoID) {
  return videos.find((video) => video.videoID === videoID);
}

export { getVideoIdFromURL, selectedVideo };
