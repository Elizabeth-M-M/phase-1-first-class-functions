// receivesAFunction
function receivesAFunction(cb) {
    return cb();
}
console.log(receivesAFunction(function () { return 300 / 2 }));


// returnsANamedFunction
function returnsANamedFunction() {
   return function random() {
    return 'Happy coding';
   }
   
}

const fn = returnsANamedFunction();
console.log(fn);

// returnsAnAnonymousFunction
function returnsAnAnonymousFunction() {
    return function () {
        600 / 3;
    }
}
console.log(returnsAnAnonymousFunction())