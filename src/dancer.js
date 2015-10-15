// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<div class="dancer"></div>' + '<div class="ugly"><img src ="src/uglyPic.jpg"></div>');
  this.step.call(this);
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition.call(this, top, left);
  //this.$node.on('hover', function() {
    //alert("hi");
  //});

};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);

  var nextImage = this.images[this.currentImageIndex++];
  if (!nextImage) {
    nextImage = this.images[0];
    this.currentImageIndex = 0;
  }
  (this.$node).not('.ugly').html('<img src=\'src/' + this.dance + '/' + nextImage + '.jpg\'>');
}

Dancer.prototype.setPosition = function(top, left) {
  this.top = top;
  this.left = left;
  var styleSettings = {
      top: top,
      left: left
    };
  this.$node.css(styleSettings);
}

Dancer.prototype.showUglyBeyonce = function() {
  // var $uglyPic = $('<div class=\'dancer\'><img src =\'src/uglyPic.jpg\'></div>');
  // $uglyPic.css({'top': this.top, 'left': this.left});
  // $('body').append($uglyPic);

  // (this.$node)

  // console.log('ugly beyonce');
}