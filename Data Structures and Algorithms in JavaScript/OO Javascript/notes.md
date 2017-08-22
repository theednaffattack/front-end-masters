## How to Define a Class in JavaScript (ES5, pseudoclassical)

Defining a Class:

  1 - What is it? 

  2 - What does it have? 

  3 - What does it do? 

When defining a class in JavaScript you tend to think of the 'what' when naming.

Below we have a function that will describe a building, so when naming the class we name it Building

In the constructor function we assign propeties [What is it?]

In the instance we have the option of passing in parameters at runtime (making it dynamic, right?) [What does it have?(?)]

In the methods we park functions [What does it do?]

```javascript
// Constructor
function Building(floors) {
  this.what = "building"; // in this case we'll literally make what a property
  this.floors = floors;  // floors will be a property value that will be supplied when Building is called.
}

// An instance
const myHouse = new Building(3);

// Methods
Building.prototype.countFloors = function() {
  console.log('I have', this.floors, 'floors')
};
```

The results of the shared method (countFloors) depend on the unique instance values which are created at call-time inside each function's scope.

```javascript
const yourHouse = new Buiding(2);

const theOffice = new Building(12);

yourHouse.countFloors();

theOffice.countFloors();
```