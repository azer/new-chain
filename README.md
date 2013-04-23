## new-chain

Create chaining APIs from functions

## Install

```bash
$ npm install new-chain
```

## Usage

```js

Num(3).sum(10).sub(5).mul(2)
// => 16

function Num(x){

    var chain = newChain(sum, sub, mul)

    chain.val = val

    return chain

    function mul(n){
        x *= n
    }
    
    function sum(n){
        x += n
    }
    
    function sub(n){
        x -= n
    }
    
    function val(n){
        return x
    }

}


```

![](https://dl.dropboxusercontent.com/s/swyw3663x22pnwy/npmel_15.jpg)
