console.log("hello world from background sript ");

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.url) {
    chrome.tabs.sendMessage(tabId, {
      message: "urlChanged",
      url: changeInfo.url,
    });
  }
});
