var BeadedBathrobeDancer = function(top, left, timeBetweenSteps) {
  this.images = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12", "image13", "image14", "image15", "image16",
  "image17", "image18", "image19", "image20", "image21", "image22", "image23", "image24", "image25", "image26", "image27", "image28", "image29", "image30"];
  this.currentImageIndex = 0;
  this.dance = "other"

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("beadedBathrobe");

};

BeadedBathrobeDancer.prototype = Object.create(Dancer.prototype);
BeadedBathrobeDancer.prototype.constructor = BeadedBathrobeDancer;
BeadedBathrobeDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};