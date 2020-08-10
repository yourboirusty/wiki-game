var status = 0;
var clicks = -1;
var tab_no = null;
var tabo;
var time;
var delta;

chrome.webNavigation.onCommitted.addListener(function(sessionData){
  if( sessionData.tabId == tab_no ){
    if ( sessionData.transitionQualifiers == ["from_address_bar"]){
      tab_no = null;
      clicks = -1;
      status = 0;
      alert("Game has ended, you failed");
    }
    if( sessionData.transitionType == "link"){
      clicks++;
      chrome.browserAction.setBadgeText({text:clicks.toString(10)});
      if(clicks == 0){
        chrome.browserAction.setBadgeText({text:"GO"});
      }
    }
    chrome.tabs.executeScript(tab_no, {file: "content.js"});
    if( sessionData.url == "https://en.wikipedia.org/wiki/Adolf_Hitler"){
      delta = (new Date().getTime() - time.getTime())/1000;
      alert("Congrats! You got to Hitler in " + clicks.toString(10) + " clicks, and it took you " + delta +" seconds.");
      chrome.browserAction.setBadgeText({text:""});
      clicks = -1;
      status = 0;
    }
  }
});

chrome.browserAction.onClicked.addListener(function(){
  chrome.tabs.create({"url": "https://en.wikipedia.org/wiki/Special:Random"},
      function(tab){
      tab_no = tab.id;
    });
    time = new Date();
});
