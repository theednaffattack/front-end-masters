## Ingredients to Learn Data Structures

1 - Learn Data Structure Concept
  - Draw It
  - Create the API / operation methods

2 - Build the Data Structure
  - Pseudocode the implementation
  - Code the data structure constructor

3 - Utilize the Data Structure
  - Put your data structure to work!
  - Pair it with an algorithm if needed

4 - Understand the Data Structure
  - What is the time complexity?
  - How can you optimize?

### Concept: Stacks

The last item added into the stack will be the first one taken out of the stack.

You can only push(add to the top) and pop(take from the top)

LIFO = Last In First Out (off)

### Diagram: Stacks

Key:
'SF' prefix: It goes on the stack frame, these are always functions
'Note' prefix: A note to myself about further learning or open questions I can't answer for myself right now.
'Story' prefix: I bet these will always be flow control conditional type things, but this is what happens and when inside the function. Probably over-commenting. I hope this will help out when I learn to go full-time TDD.  Write these comments out first as tests, then write the code.

```javascript
// A procedural function that makes eggs on many styles
const makeEggs = function(style, n) { // SF0- Let's get started making eggs...
  const completedEgg;  // Note: I don't understand initializing this way
  if (style !== "boiled") { // Story(if): if they're not boiled, then...
    const crackedEggs = crackEggs(n); // SF1- crack the egg open...
    if (style !== "scrambled") { // Story(if): at this point, if you don't want scrambled...
      completedEgg = fryEgg(crackedEggs, style) // SF2 - let's fry it in a pan
    } else { // Story(if): or else if you DO want scrambled, story-end
      const preppedEggs = whipEggs(crackedEggs);
      completedEgg = fryEgg(preppedEggs); // SF2 - let's fry it in a pan
    } // end if / else
  } // end outside if
} // end makeEggs

makeEggs('scrambled', 3);
makeBacon('crispy', 2);
```
Each of the numbered comments surround functions that are helping us execute decisions. Each of these functions goes on the "stack frame" the order in which functions are executed(?) in order to run our programs. This is background behavior in JavaScript meant to illustrate how a stack operates in 'real-life' use.

#### Example Stack (in the wild): The Call Stack

A Stack Frame (I think) is each item on the call stack. If the stack frames fryEgg or crackEggs calls a function themselves it'd push another stack frame (a function) onto the stack and pop off when execution is finished. The order would be governed by scope, right?  So that includes encapsulation since these function calls have variables that are closed over. It makes sense that you'd be careful to keep things out of global. It's even better that 'const' allows us to keep things scoped, even inside if blocks that are probably executing inside these functions.

Call Stack (pretend the arrows point up, below):

2 - fryEgg()

1 - crackEggs()

0 - makeEggs()

```flow
sf0=>operation: 0 makeEggs()

sf1=>operation: 1 crackEggs()
sf2=>operation: 2 fryEggs()
e=>end

sf2->sf1->sf0->
```

### Interface: Stacks

1. Constructor Function
   - Storage
2. Methods
   - push(value) - adds value to the top of the stack, returns the size of the stack
   - pop() - removes value from the top of the stack, returns value (the one it removes?)
   - size() - returns the size of the stack as an integer

### Concept: Queues

The first item added into the queue will be the first one taken out of the queue

FIFO = First In First Out

When we add an item to our queue it's called enqueue(ing)

When we remove an item from our queue it's called dequeue(ing)

## Concept: Recursion

Recursion is simply when a function calls itself, however it doesn't stop there.

```javascript
const callMe = function() {
  callMe();
  callMe();
  callMe('anytime');
};
```

A recursive function will call itself over and over. 

*The function above will never stop. In fact I don't think it'll actually get to the second "callMe()" above. I believe it will infinitely loop, starting there.

This is very much like a loop.

### Why Recursion?

They're elegant solutions to keep your code D.R.Y. They're also expected CS knowledge. You have to know exactly what they are and the lingo surrounding them at all times.

### Recursion Recipe

1. Identify base case(s).
2. Identify recursive case(s).
3. Return where appropriate.
4. Write procedures for each case that bring you closer to the base case(s).

```javascript
const callMyself = function() {
  if() {
    // base case
    return;
  } else {
    // recursive case
    callMyself();
  }

  // outer function
  return;
};
```



### Looping

```javascript
const loopNTimes = function(n) {
    console.log('n equals ', n)
  if (n <= 1) {
      return 'complete';
  }
  return loopNTimes(n-1);
};
loopNTimes(3);
```

### Factorial w/ Loop

```javascript
function computeFactorial(num) {
  const result = 1;
  
  for(let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
```

### Factorial w/ Recursion

```javascript
function computeFactorial(num) {
  if(num == 1) {
    return 1;
  } else {
    return num * computeFactorial(num -1);
  }
}

computeFactorial(5);
```

## Common Patterns for Recursion

### Wrapper Function

```javascript
function runRecursiveLoop(start, end) {
  function recurse(i) {
    console.log(i);
    if(i < end) {
      recurse(i + 1);
    }
  }
  recurse(start);
}

function runLoopAsMyself(i, end) {
  console.log(i);
  if(i < end) {
    runLoopAsMyself(i + 1, end);
  }
}
```

