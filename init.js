chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "urlChanged") {
    console.log("URL has changed:", request.url);
    const myUrl = request.url;
    const videoId = myUrl.slice(32, 43);

    let intervalId = setInterval(function () {
      const body = document.getElementById("player-container-outer");

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

    // alert("myurl: " + myUrl);

    if (myUrl.slice(0, 24) == "https://www.youtube.com/") {
      document.body.style.overflow = "scroll";

      // if (document.getElementById("miniOverlay")) {
      //   console.log("miniOverlay already exists");
      //   if (document.getElementById("myOverlayVideo")) {
      //     newDiv.appendChild(document.getElementById("myOverlayVideo"));
      //   }
      // } else {
      //   var newDiv = document.createElement("div");
      //   newDiv.className = "miniOverlay";
      //   document.documentElement.appendChild(newDiv);

      //   if (document.getElementById("myOverlayVideo")) {
      //     newDiv.appendChild(document.getElementById("myOverlayVideo"));
      //   }
      // }

      // document.getElementById("primary-inner").style.display = "flex";
      // document.getElementById("primary-inner").style.flexDirection = "column";
      // document.getElementById("primary-inner").style.height =
      //   "calc(100vh - 100px)";

      // document.getElementById("secondary-inner").style.height = "calc(100vh - 100px)";
      // document.getElementById("secondary-inner").style.overflow = "scroll";

      // document.getElementById("below").style.overflow = "scroll";
      // document.getElementById("below").style.flexGrow = "1";

      if (myUrl.slice(0, 25) == "https://www.youtube.com/@") {
        // alert("this is not a video");
        const myOverlayVideo = document.getElementById("myOverlayVideo");
        if (myOverlayVideo) {
          myOverlayVideo.className = "myOverlayMiniVideo";
          document.getElementById("myIframe").style.height = "300px";
        }
      } else {
        // alert("found video");
        if (
          (myUrl.length > 24 && myUrl.slice(24, 31) != "results") ||
          myUrl.slice(24, 31) != "channel"
        ) {
          document.body.style.overflow = "hidden";

          document.getElementById("primary-inner").style.display = "flex";
          document.getElementById("primary-inner").style.flexDirection =
            "column";
          document.getElementById("primary-inner").style.height =
            "calc(100vh - 100px)";

          document.getElementById("secondary-inner").style.height =
            "calc(100vh - 100px)";
          document.getElementById("secondary-inner").style.overflow = "scroll";

          document.getElementById("below").style.overflow = "scroll";
          document.getElementById("below").style.flexGrow = "1";
          document.getElementById("below").style.marginTop = "25px";
          const myOverlayVideo = document.getElementById("myOverlayVideo");
          if (myOverlayVideo) {
            myOverlayVideo.className = "myOverlayVideo";
            myOverlayVideo.innerHTML = `<div class="outerBorderStyle"><div class="innerBorderStyle"></div></div>  <div><div class="outerBorderStyle2"><div class="innerBorderStyle2"></div></div><div class="pain"> <iframe width="100%" height="100%" id="myIframe" src="https://www.youtube.com/embed/${videoId}?autoplay=1" title="World Of Hardstyle 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> <div class="outerBorderStyle3"><div class="innerBorderStyle2"></div></div></div>  <div class="outerBorderStyleBottom"><div class="innerBorderStyle"></div></div>`;
          } else {
            // alert("adding vidoe video overlay");
            if (document.getElementById("myOverlayVideo")) {
              console.log("myOverlayVideo already exists");
            } else {
              const myOverlayVideo = document.createElement("div");
              myOverlayVideo.className = "myOverlayVideo";
              myOverlayVideo.id = "myOverlayVideo";
              if (
                myUrl.length > 24 &&
                (myUrl.slice(24, 31) != "results" ||
                  myUrl.slice(24, 31) != "channel")
              ) {
                myOverlayVideo.innerHTML = `<div class="outerBorderStyle"><div class="innerBorderStyle"></div></div>  <div><div class="outerBorderStyle2"><div class="innerBorderStyle2"></div></div><div class="pain"> <iframe width="100%" height="100%" id="myIframe" src="https://www.youtube.com/embed/${videoId}?autoplay=1" title="World Of Hardstyle 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> <div class="outerBorderStyle3"><div class="innerBorderStyle2"></div></div></div>  <div class="outerBorderStyleBottom"><div class="innerBorderStyle"></div></div>`;
              }
              // document.documentElement.appendChild(myOverlayVideo);
              //document.getElementById("player").appendChild(myOverlayVideo);
              // Create a new div element
              // var newDiv = document.createElement("div");
              // newDiv.textContent = "This is the new div!"; // You can customize the content as needed

              // // Get the parent node
              var parentContainer = document.getElementById(
                "player-container-outer"
              );

              // Insert the new div before the existing child (assuming there is a child)
              parentContainer.insertBefore(
                myOverlayVideo,
                parentContainer.firstChild
              );
            }
          }
        } else {
          const myOverlayVideo = document.getElementById("myOverlayVideo");
          myOverlayVideo.className = "myOverlayMiniVideo";
          document.getElementById("myIframe").style.height = "300px";
        }
      }
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var currentUrl = window.location.href;
  console.log(currentUrl, "currentUrl");
  // alert("currentUrl: " + currentUrl);
  const videoId = currentUrl.slice(32, 43);
  //   const resultText = currentUrl.slice(24, 31);

  let intervalId = setInterval(function () {
    const body = document.getElementById("player-container-outer");

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
  // if (currentUrl.length > 24) {
  if (currentUrl.slice(0, 24) == "https://www.youtube.com/") {
    document.body.style.overflow = "scroll";

    // if (document.getElementById("miniOverlay")) {
    //   console.log("miniOverlay already exists");

    //   if (document.getElementById("myOverlayVideo")) {
    //     newDiv.appendChild(document.getElementById("myOverlayVideo"));
    //   }
    // } else {
    //   var newDiv = document.createElement("div");
    //   newDiv.className = "miniOverlay";
    //   document.documentElement.appendChild(newDiv);

    //   if (document.getElementById("myOverlayVideo")) {
    //     newDiv.appendChild(document.getElementById("myOverlayVideo"));
    //   }
    // }

    // document.getElementById("primary-inner").style.display = "flex";
    // document.getElementById("primary-inner").style.flexDirection = "column";
    // document.getElementById("primary-inner").style.height =
    //   "calc(100vh - 100px)";

    // document.getElementById("secondary-inner").style.height = "calc(100vh - 100px)";
    // document.getElementById("secondary-inner").style.overflow = "scroll";
    // document.getElementById("below").style.overflow = "scroll";
    // document.getElementById("below").style.flexGrow = "1";
    // document.getElementById("player").style.height = "auto";

    //alert("currentUrl second alert: " + currentUrl);
    if (currentUrl.slice(0, 25) == "https://www.youtube.com/@") {
      //  alert("this is not a video");
      console.log("this is not a video");
    } else if (currentUrl.length > 24) {
      document.body.style.overflow = "hidden";

      document.getElementById("primary-inner").style.display = "flex";
      document.getElementById("primary-inner").style.flexDirection = "column";
      document.getElementById("primary-inner").style.height =
        "calc(100vh - 100px)";

      document.getElementById("secondary-inner").style.height =
        "calc(100vh - 100px)";
      document.getElementById("secondary-inner").style.overflow = "scroll";

      document.getElementById("below").style.overflow = "scroll";
      document.getElementById("below").style.flexGrow = "1";
      document.getElementById("below").style.marginTop = "25px";

      if (document.getElementById("myOverlayVideo")) {
        console.log("myOverlayVideo already exists");
      } else {
        // alert("adding vidoe video overlay");
        const myOverlayVideo = document.createElement("div");
        myOverlayVideo.className = "myOverlayVideo";
        myOverlayVideo.id = "myOverlayVideo";
        if (
          currentUrl.length > 24 &&
          (currentUrl.slice(24, 31) != "results" ||
            currentUrl.slice(24, 31) != "channel")
        ) {
          myOverlayVideo.innerHTML = `<div class="outerBorderStyle"><div class="innerBorderStyle"></div></div>  <div><div class="outerBorderStyle2"><div class="innerBorderStyle2"></div></div><div class="pain"> <iframe width="100%" height="100%" id="myIframe" src="https://www.youtube.com/embed/${videoId}?autoplay=1" title="World Of Hardstyle 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> <div class="outerBorderStyle3"><div class="innerBorderStyle2"></div></div></div> <div class="outerBorderStyleBottom"><div class="innerBorderStyle"></div></div> `;
        }
        // document.documentElement.appendChild(myOverlayVideo);
        // Create a new div element
        // var newDiv = document.createElement("div");
        // newDiv.textContent = "This is the new div!"; // You can customize the content as needed

        // Get the parent node
        var parentContainer = document.getElementById("player-container-outer");

        // Insert the new div before the existing child (assuming there is a child)

        parentContainer.insertBefore(
          myOverlayVideo,
          parentContainer.firstChild
        );
      }
    }
  }
});
