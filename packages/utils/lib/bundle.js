var sum = function (a, b) {
    return a + b;
};
// module.exports = sum;

var multi = function (a, b) {
    return a * b;
};
// module.exports = multi;

var division = function (a, b) {
    return a / b;
};

var gaoJoin = function (a, b) {
    var test = 'gaojointest';
    return test + a + b;
};

export { division, gaoJoin, multi, sum };
