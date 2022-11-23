// receivesAFunction
function receivesAFunction(cb) {
    return cb();
}
console.log(receivesAFunction(function () { return 300 / 2 }));

// // some random function
// function random() {
//     return 'Happy coding';
// }

// returnsANamedFunction
function returnsANamedFunction() {
    return receivesAFunction(function () { return 500 / 2 });
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