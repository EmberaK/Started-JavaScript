function name(x) {
    return function(y) {
        return x * y;
    }
}

const result = name(5)(2);
alert(`${result}`);
