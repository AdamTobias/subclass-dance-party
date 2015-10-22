var SevenElevenDancer = function(top, left, timeBetweenSteps) {
  this.images = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12", "image13", "image14", "image15", "image16",
  "image17", "image18", "image19", "image20", "image21", "image22", "image23"];
  this.currentImageIndex = 0;
  this.dance = "711"

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("bad");

};

SevenElevenDancer.prototype = Object.create(Dancer.prototype);
SevenElevenDancer.prototype.constructor = SevenElevenDancer;
SevenElevenDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};