// Challenge 1: Golden Ratio
Number.prototype.constructor.goldenRatio = 1.61803398875;
// Challenge 2: Round
Number.prototype.round = function round() {
    return Math.round(this);
};
// Challenge 2: Ceil
Number.prototype.ceil = function ceil() {
    return Math.ceil(this);
};
// Challenge 2: Floor
Number.prototype.floor = function floor() {
    return Math.floor(this);
};
// Challenge 3: Pad
Number.prototype.pad = function pad(x, y) {
    // Get the number of digits before and after the decimal point
    var whole = this.toString().split('.')[0].toString().length;
    var dec = this.toString().split('.')[1].toString().length;
    // Create a string to hold the padded number
    var padded = this;
    // Pad the whole digits with zeros
    if (whole !== x) {
        for (whole; whole < x; whole += 1) {
            padded = "0" + padded;
        }
    }
    // Pad the decimal digits with zeros
    if (dec !== y) {
        for (dec; dec < y; dec += 1) {
            padded = padded + "0";
        }
    }
    return padded;
};
// Challenge 4: Degrees to Radians
Number.prototype.degToRad = function degToRad(digits) {
    var rads = this * (Math.PI / 180);
    if (digits) {
        return Number(rads.toFixed(digits));
    }
    return rads;
};
// Challenge 5: Radians to Degrees
Number.prototype.radToDeg = function radToDeg(digits) {
    var degs = this * (180 / Math.PI);
    if (digits) {
        return Number(degs.toFixed(digits));
    }
    return degs;
};
// Challenge 6: Dollar Amount
Number.prototype.toDollars = function toDollars() {
    // If input is an integer, return format with template string
    if (Number.isInteger(this)) {
        return "$" + this + ".00";
    }
    // If input has just 1 decimal number, return format with template string
    var decimals = String(this).split('.')[1].toString().length;
    if (decimals === 1) {
        return "$" + this + "0";
    }
    // If input has 2+ decimal numbers, return format with template string and round down
    return "$" + Math.floor(this * 100) / 100;
};
// Challenge 7: Tax Rate
Number.prototype.tax = function tax(rate) {
    if (rate) {
        return Number((this + (this * rate)).toFixed(2));
    }
    return Number((this * 1.25).toFixed(2));
};
// Challenge 8: Interest
Number.prototype.interest = function interest(months, rate) {
    return Number((this * Math.pow((rate / 100) + 1, months)).toFixed(2));
};
// Challenge 9: Mortgage
Number.prototype.mortgage = function mortgage(years, rate) {
    return (this * (((rate * (Math.pow((1 + rate), (years * 12))))) / ((Math.pow((1 + rate), (years * 12))) - 1))).floor();
};
