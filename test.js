var newChain = require("./");

it('is the example in README', function(){
  var x = 0;

  var val = newChain(mul, sum, sub);

  val.sum(8).sub(2).mul(3);

  expect(x).to.equal(18);

  function mul(n){
    x *= n;
  }

  function sum(n){
    x += n;
  }

  function sub(n){
    x -= n;
  }

});

it('accepts objects', function(){

  var x = 0;

  var val = newChain({ alias: foo, foo: foo });

  val.alias().foo().alias();

  expect(x).to.be.equal(3);

  function foo(){
    x++;
  }

});

it('allows aliases', function(){

  var x = 0;

  var val = newChain({ alias: foo }, foo);

  val.alias().foo().alias();

  expect(x).to.be.equal(3);

  function foo(){
    x++;
  }

});
