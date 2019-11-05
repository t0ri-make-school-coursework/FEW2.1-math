
// Challenge 1: Golden Ratio
Number.prototype.constructor.goldenRatio = Number(1.61803398875)


// Challenge 2: Round
Number.prototype.round = function round() {
  return Math.round(Number(this))
}


// Challenge 2: Ceil
Number.prototype.ceil = function ceil() {
  return Math.ceil(Number(this))
}


// Challenge 2: Floor
Number.prototype.floor = function floor() {
  return Math.floor(Number(this))
}


// Challenge 3: Pad
Number.prototype.pad = function pad(x, y) {
  // Get the number of digits before and after the decimal point
  let whole = this.toString().split('.')[0].toString().length
  let dec = this.toString().split('.')[1].toString().length
  // Create a string to hold the padded number
  let padded = String(this)

  // Pad the whole digits with zeros
  if (whole !== x) {
    for (whole; whole < x; whole += 1) {
      padded = `0${padded}`
    }
  }

  // Pad the decimal digits with zeros
  if (dec !== y) {
    for (dec; dec < y; dec += 1) {
      padded = `${padded}0`
    }
  }

  return padded
}


// Challenge 4: Degrees to Radians
Number.prototype.degToRad = function degToRad(digits) {
  const rads = Number(this) * (Math.PI / 180)
  if (Number(digits)) {
    return Number(rads.toFixed(digits))
  }

  return Number(rads)
}


// Challenge 5: Radians to Degrees
Number.prototype.radToDeg = function radToDeg(digits) {
  const degs = Number(this) * (180 / Math.PI)
  if (Number(digits)) {
    return Number(degs.toFixed(digits))
  }

  return Number(degs)
}
