## new-chain

Create chaining APIs from functions

## Install

```bash
$ npm install new-chain
```

## Usage

```js
x = 0
val = newChain(mul, sum, sub)

val.sum(8).sub(2).mul(3)

x
// => 18

function mul(n){
    x *= n
}

function sum(n){
    x += n
}

function sub(n){
    x -= n
}
```

![](https://dl.dropboxusercontent.com/s/swyw3663x22pnwy/npmel_15.jpg)
