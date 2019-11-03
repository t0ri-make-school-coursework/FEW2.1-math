
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
