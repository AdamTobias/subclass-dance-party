var SingleDancer = function(top, left, timeBetweenSteps) {
  this.images = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12", "image13"];
  this.currentImageIndex = 0;
  this.dance = "singleLadies"

  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass("blinky");
  // this.$node.append('<img src=\'src/singleLadies/image1.jpg\'>');

};

SingleDancer.prototype = Object.create(Dancer.prototype);
SingleDancer.prototype.constructor = SingleDancer;
SingleDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);


};