// Create a unique constructor that makes a building of your choice using
// the pseudoclassical pattern.

// Don't forget to add methods and practice creating instances.

// Function below is my fantasy super tech world HQ.

function HyperForge(pods, floors) {
  this.pods = pods;
  this.laboratories = {};
  this.meetingSpaces = {};
  this.deskSpaces = {};
  this.kitchenSpaces = {};
  this.bathrooms = {};
  this.floors = floors;
}

HyperForge.prototype.countFloors = function(){
  console.log('I have ' + this.floors + ' floors.')
};

HyperForge.prototype.setDefaultSpaces = function(argument){
  // take the number of pods and set min value properties for:
  // laboratories, meetingSpaces, deskSpaces, kitchenSpaces, bathrooms
  this.laboratories.count = this.pods * 6;
  console.log('I have ' + this.laboratories.count + ' labs.')
};


const forgeOne = new HyperForge(2, 12);

const forgeTwo = new HyperForge(8, 39);

forgeOne.countFloors();

forgeTwo.countFloors();

forgeOne.setDefaultSpaces();

forgeTwo.setDefaultSpaces();
