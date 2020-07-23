
(function(window){
	var byeSpeaker={};
var speak = "GoodBye";


byeSpeaker.speak =function () {
  console.log(speak + " " + name);
}
window.byeSpeaker=byeSpeaker
})(window);