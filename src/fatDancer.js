var CrazyDancer = function(top, left, timeBetweenSteps) {
  this.images = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12", "image13", "image14", "image15", "image16" ];
  this.currentImageIndex = 0;
  this.dance = "crazyInLove"


  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("fat");

};

CrazyDancer.prototype = Object.create(Dancer.prototype);
CrazyDancer.prototype.constructor = CrazyDancer;
CrazyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};