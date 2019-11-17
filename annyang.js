// <script src="//cdnjs.cloudflare.com/ajax/libs/annyang/2.6.1/annyang.min.js"></script>

if (annyang) {
  // Let's define a command.
  var commands = {
    'hello': function() { alert('Hello world!'); }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}
