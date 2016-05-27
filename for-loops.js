for (i=5; i <= 120; i+=10) {
  console.log("increment by 10:", i);
}

for (i=4096; i >= 1; i /=2) {
  console.log("decrement by division of 2:", i);
}


var presidents = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams"]

for (i=0; i < presidents.length; i++) {
  console.log("President #" + (i+1) + ": " + presidents[i]);
}

var antSpecies = {
  "argentine": {},
  "army": {},
  "big headed": {},
  "black": {},
  "bull": {},
  "carpenter": {},
  "crazy": {},
  "fire": {},
  "glider": {},
  "honey pot": {},
  "jack jumper": {}
}

for (var x in antSpecies) {
  console.log("Ant Species:", x);
}


var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var stack = "";

for (var x in alphabet) {
  stack += alphabet[x];
  console.log(stack);
}

var newStack = "";

for (var x in alphabet) {
  if ((x%5) === 0 && x != 0) {
    newStack += " ";
  }
  newStack += alphabet[x];
  console.log(newStack);
}