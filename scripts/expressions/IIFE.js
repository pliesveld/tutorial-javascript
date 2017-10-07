msg = "msg";
msg_other = "msg_other";

(function IIFE() { 
  var msg = "This is function that is defined, and then immediately invoked.  It does not clutter the global namespace with it's definition";
  console.log(msg);
})();

function sample() { 
  msg_other = "When this function is invoked, the variable msg_other is added to the global namespace.";
  console.log(msg_other);
}

console.log(msg);
console.log(msg_other);

sample();

console.log(msg_other);

