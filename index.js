module.exports = newChain;

function newChain(){
  var chain   = {},
      methods = Array.prototype.slice.call(arguments),
      names   = methods.map(function(f){
        return f.name;
      });

  names.forEach(function(n, i){
    chain[n] = function(){
      methods[i].apply(this, arguments);
      return chain;
    };
  });

  return chain;
}
