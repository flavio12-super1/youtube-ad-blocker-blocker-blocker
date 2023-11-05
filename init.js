chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "urlChanged") {
    console.log("URL has changed:", request.url);
    const myUrl = request.url;
    const videoId = myUrl.slice(32, 43);

    let intervalId = setInterval(function () {
      const body = document.body;

      if (body) {
        const videos = body.querySelectorAll("video");
        videos.forEach((video) => {
          video.pause();
        });
      }
    }, 100);

    // Set a timeout to clear the interval after 5 seconds
    setTimeout(function () {
      clearInterval(intervalId);
    }, 1000 * 60);

    const myOverlayVideo = document.getElementById("myOverlayVideo");
    myOverlayVideo.innerHTML = `  <iframe width="100%" height="720" src="https://www.youtube.com/embed/${videoId}?autoplay=1" title="World Of Hardstyle 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var currentUrl = window.location.href;
  console.log(currentUrl);
  const videoId = currentUrl.slice(32, 43);

  let intervalId = setInterval(function () {
    const body = document.body;

    if (body) {
      const videos = body.querySelectorAll("video");
      videos.forEach((video) => {
        video.pause();
      });
    }
  }, 100);

  // Set a timeout to clear the interval after 5 seconds
  setTimeout(function () {
    clearInterval(intervalId);
  }, 1000 * 60);

  const myOverlayVideo = document.createElement("div");
  myOverlayVideo.className = "myOverlayVideo";
  myOverlayVideo.id = "myOverlayVideo";
  myOverlayVideo.innerHTML = `  <iframe width="100%" height="720" src="https://www.youtube.com/embed/${videoId}?autoplay=1" title="World Of Hardstyle 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  document.documentElement.appendChild(myOverlayVideo);
});