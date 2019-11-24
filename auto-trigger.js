// --enable-blink-features=GetUserMedia
setTimeout(() => {
  navigator.permissions
    .query({ name: 'microphone' })
    .then(function (result) {
      console.log(result.state)
    })
    .catch(function (exc) {
      console.log(exc)
    });

  navigator.mediaDevices.getUserMedia({audio: true})
    .then(function(stream){
        console.log("Streaming!")
    })
    .catch(function(err) {
        // chrome.tabs.create({
        //     url: chrome.extension.getURL("options.html"),
        //     selected: true
        // })
        console.log("GetUserMedia not working", err)
    });
}, 1000);
