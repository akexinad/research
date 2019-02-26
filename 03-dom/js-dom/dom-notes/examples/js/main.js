let pageNode = document.getElementsByTagName('body')[0];


const button = document.getElementById('button');
const sayHi = function(event) {
  const myName = document.getElementById("myname").value;
  alert("Hi, " + myName);
};

button.addEventListener('click', sayHi);
