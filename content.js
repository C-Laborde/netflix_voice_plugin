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

  var interval = setInterval(function() {
    var elem = document.querySelector('[aria-label="Skip Intro"]');
    if (elem) {
      console.log('Skip!');
      elem.click();
      clearInterval(interval);
    }
  }, 5000);
});
