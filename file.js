// exports.myDateTime = function () {
//     return new Date().toLocaleString();
// };
function add(a, b) {
    return a + b;
};
function zombie(a, b, c) {
    return a * b * c;
};
function radar(a, b, c, d) {
    return a * b * c - d;
};

module.exports = {
    add,
    zombie,
    radar
}