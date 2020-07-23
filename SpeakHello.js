
(function(window){
var helloSpeaker={};
var speak = "Hello";


 helloSpeaker.speak = function () {
  console.log(speak + " " + name);
}
window.helloSpeaker=helloSpeaker
})(window);

