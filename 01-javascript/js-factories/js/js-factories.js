console.log('ciao mondo');

const catFactory = function (n, a, f) {
  return {
    name: n,
    age: a,
    furColor: f,
    species: 'feline',
    meow: function () {
      console.info( this );
      console.log('meoow, my name is ' + this.name);  //'.this is reference to the current method' THINK OF IT AS SELF.
    }
  };
};


const cuteCats = [
  catFactory('Joe', 12, 'white'),
  catFactory('anne', 12, 'red'),
  catFactory('ali', 10, 'black'),

  // { name: "Angel", age: 18, furColor: "Grey"},
  // { name: "Evil", age: 14, furColor: "Red"},
  // { name: "Meh", age: 12, "Fur Color": "White"},
];

for (let i = 0; i < cuteCats.length; i++) {
  console.log( cuteCats[i].furColor );
}


// Prototypal Inheritance /////////////////////////////////////////////////////////////
// Interesting/Historic BUT NOT SUPER IMPORTANT TODAY /////////////////////////////////

// Capital C in Cat denotes that this is a Cat constructor //////////////////////
const Cat = function (n, a, f) {
  // the "this" object is created automagically for you by JS.
  this.name = n;
  this.age = a;
  this.furColor = f;
  this.meow = function () {
    console.log("meow my name is " + this.name);
  }
  // no need for a return statment. That also happens automagically.
}

const cooper = new Cat('Cooper', 3, 'striped');
const audrey = new Cat('Audrey', 3, 'striped');

cooper.meow();

Cat.prototype.eat = function (food) {
  console.log('Yum I love to eat ' + food);
};

cooper.eat('brown mushy stuff');
cooper.eat('brown jelly stuff');

Cat.prototype.species = 'feline';
