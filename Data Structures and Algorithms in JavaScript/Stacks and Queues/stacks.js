// input the missing methods below for our Stack
// the storage property is set to string so that's our stack (I think)

const Stack = function() {
  this.storage = "";
};

Stack.prototype.push = function(val) {
  const originalString = this.storage;
  const valToAppend = '***' + val;
  let newString = [...originalString, ...valToAppend]
  newString = newString.join("");
  this.storage = newString;
};

Stack.prototype.pop = function() {
  // slice off the last characters up until ***
  const lastDelimeter = this.storage.lastIndexOf('***');
  const str = this.storage.slice(lastDelimeter + 3);
  // updating the new stack without the last item
  this.storage = this.storage.substring(0, lastDelimeter)
  console.log(JSON.stringify(this.storage, null, 2));
  // return the last item
  return str;
};

Stack.prototype.size = function() {
  const stackSize = this.storage.length;
  return stackSize
};

const myWeeklyMenu = new Stack();

myWeeklyMenu.push("RedBeans");

console.log('Add new item ( push() ):\n' + myWeeklyMenu.storage);

console.log('Report ( size() ) after new item push:\n' + myWeeklyMenu.size());

myWeeklyMenu.push("CornBread");

console.log('New item - CornBread:\n' + myWeeklyMenu.storage);

console.log('Remove new item ( pop() ):\n' + myWeeklyMenu.pop());

console.log('myWeeklyMenu after removing the last itme:\n' + myWeeklyMenu.storage);
