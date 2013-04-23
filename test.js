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
