// this, bind, (call and apply)
// greeting() is the same as greeting: function() {}

const groucho = {
  fullName: 'Groucho Julius Marx',
  changeName() {
    this.fullName = 'Some other name';
  },
  greeting() {
    return `Good evening, my name is ${ this.fullName }`; // "this" will refer to the current object
  }
};

console.log( groucho.greeting() );

const unboundGreeting = groucho.greeting; // Copying the method from the object breaks the connection to 'this'. 'this' would now refer to the browser window, not the object.
console.log( unboundGreeting() );

// .call -- invoke a function with a partcular object as 'this' ////////////////////
console.log( unboundGreeting.call(groucho) );
console.log( unboundGreeting.call( {fullName: 'Chico Marx'} ) );

// .bind -- returns a new function which is permanently bound to whatever value of this you ask for or provide.
const boundGreeting = unboundGreeting.bind(groucho); // In react you would write something like: unboundGreeting = groucho.greeting.bind(groucho);
console.log( boundGreeting() );

// .apply -- //////////////////////////////////////////////////////////////////////////////////////
const numbers = [1, 2, 3, 4, 100, 50];

// which is the maximum value in numbers?
// in es5 and earlier
Math.max.apply ( Math, numbers ); // .apply will turn an array of args into a list of args.
// in es6
Math.max( ...numbers ); // the ... spread operator also turns an array of args into a list of args.
