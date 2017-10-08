// @flow
function inc(value) {
    return value + 1;
}

let result = inc(1);
result = inc('1');
console.log(result.length);