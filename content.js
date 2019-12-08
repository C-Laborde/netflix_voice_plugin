window.addEventListener('load', function () {
  console.log('Loading plugin...');

  // var interval = setInterval(function() {
  //   var elems = document.getElementsByClassName('WatchNext-still');
  //   if (elems && elems[0]) {
  //     console.log('Next!');
  //     elems[0].click();
  //     clearInterval(interval);
  //   }
  // }, 5000);

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting == "hello")
        var elem = document.querySelector('[aria-label="Skip Intro"]');
        if (elem) {
          console.log('Skip!');
          elem.click();
        }
        sendResponse({farewell: "goodbye"});
      if (request.greeting == "next")
        var elem = document.querySelector('[data-uia="next-episode-seamless-button"]');
        console.log({elem})
        if (elem) {
          console.log('Next!');
          elem.click();
        }
        sendResponse({farewell: "goodbye"});
    });
});
