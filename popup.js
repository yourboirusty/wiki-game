let startButton = document.getElementById("start");


startButton.onclick = function() {
      chrome.runtime.sendMessage({"message": "start"});
};

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

  }
);
