// --enable-blink-features=GetUserMedia
setTimeout(() => {
  navigator.permissions.query({name:'microphone'}).then(function(result) {
      if (result.state == 'granted') {
          console.log("Granted")
      } else if (result.state == 'prompt') {
          console.log("Prompt")
      } else if (result.state == 'denied') {
          console.log("Denied")
      }
      });

    navigator.mediaDevices.getUserMedia({audio: true})
    .then(function(stream){
        console.log("Streaming!")
    })
    .catch(function() {
        // chrome.tabs.create({
        //     url: chrome.extension.getURL("options.html"),
        //     selected: true
        // })
        console.log("GetUserMedia not working")
    });
}, 1000);
