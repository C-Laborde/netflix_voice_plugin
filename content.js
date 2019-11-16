window.addEventListener('load', function () {
  console.log('Loading plugin...');

  const interval = setInterval(function() {
    var elems = document.getElementsByClassName('WatchNext-still');
    if (elems && elems[0]) {
      console.log('Next!');
      elems[0].click();
      clearInterval(interval);
    }
  }, 5000);
});

