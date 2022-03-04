var Test = /** @class */ (function () {
    function Test() {
        this.a = 1;
        this.b = 2;
    }
    /**
     * C function
     * @param d Some d
     * @param e Some e
     */
    Test.prototype.c = function (d, e) {
        this.a = d + e;
    };
    return Test;
}());

export { Test as default };
