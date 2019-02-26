console.log("ciao mondo");

// CALLBACKS REVIEW ////////////////////////////////////////////////////////////////////////

// A callback is a function passed into another function which calls the first function on our behalf.

// EXAMPLE:
// Event Handlers
// Timers
// $(document).ready( ... )

// TIMERS //////////////////////////////////////////////////////////////////////
///////////////////////////////////////////

console.log("A: Before setTimeout");
setTimeout(function () {
  console.log("B: Time has passed...");
}, 4000);
console.log("C: After setTimeout");

// Here, the order will be A, C and then B
// That's because JAVASCRIPT IS ASYNCHRONOUS. Unliek ruby, which is synchronous.


// DOCUMENT READY /////////////////////////////////////////////////////////////
////////////////////////////////////////////////

console.log("A: Before the document is ready");
$(document).ready(function () {
  console.log("B: The document is now ready.");
});
console.log("C: After the document is ready.");

// There order here will also be A C and then B.


// EVENT HANDLERS ///////////////////////////////////////////////////////////
/////////////////////////////////////////////////

console.log("Fellini");
$(document).on("click", function () {
  console.log("Benigni");
});
console.log("Germi");

// Here, we will see Fellini, Germi and then Benigni when you click on the document.


console.clear()

// You are not expected to understand this /////////////////////////////////////////
const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
for (let i = 0; i < colours.length; i++) {
  console.log(colours[i]);
}

const each = function (someArray, callback) {
  console.warn( callback );
  for (let i = 0; i < someArray.length; i++) {
    callback( someArray[i] );
  }
};

each(colours, function (v) {
  console.log(v);
})

const brothers = ['fellini', 'benigni', 'germi', 'pasolini'];

each(brothers, function (b) {
  alert(b.toUpperCase());
})


// .forEach added in ES5 (also .map, .reduce)
brothers.forEach(function (brother) {
  console.log(brother.toLowerCase(), 'Calvino');
});
