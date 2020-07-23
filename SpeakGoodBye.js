
(function(window){
	var byeSpeaker={};
var speak = "GoodBye";


byeSpeaker.speak =function (name) {
  console.log(speak + " " + name);
}
window.byeSpeaker=byeSpeaker
})(window);