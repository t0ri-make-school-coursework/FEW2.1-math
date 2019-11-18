interface Number {
  goldenRatio: number;
  round: () => number;
  ceil: () => number;
  floor: () => number;
  pad: (x: number, y: number) => string;
  degToRad: (digits: number) => number;
  radToDeg: (digits: number) => number;
  toDollars: () => string;
  tax: (rate: number) => number;
}


// Challenge 1: Golden Ratio
Number.prototype.constructor.goldenRatio = 1.61803398875


// Challenge 2: Round
Number.prototype.round = function round(): number {
  return Math.round(this)
}


// Challenge 2: Ceil
Number.prototype.ceil = function ceil(): number {
  return Math.ceil(this)
}


// Challenge 2: Floor
Number.prototype.floor = function floor(): number {
  return Math.floor(this)
}


// Challenge 3: Pad
Number.prototype.pad = function pad(x: number, y: number): string {
  // Get the number of digits before and after the decimal point
  let whole: number = this.toString().split('.')[0].toString().length
  let dec: number = this.toString().split('.')[1].toString().length
  // Create a string to hold the padded number
  let padded: string = this

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
Number.prototype.degToRad = function degToRad(digits?: number): number {
  const rads: number = this * (Math.PI / 180)
  if (digits) {
    return Number(rads.toFixed(digits))
  }

  return rads
}


// Challenge 5: Radians to Degrees
Number.prototype.radToDeg = function radToDeg(digits?: number): number {
  const degs: number = this * (180 / Math.PI)
  if (digits) {
    return Number(degs.toFixed(digits))
  }

  return degs
}


// Challenge 6: Dollar Amount
// Number.prototype.toDollars = function toDollars(): string {
//   // If input is an integer, return format with template string
//   if (Number.isInteger(this)) {
//     return `$${this}.00`
//   }
//   // If input has just 1 decimal number, return format with template string
//   let decimals: any = this.toString().split('.')[1].toString().length
//   if (decimals === 1) {
//     return `$${this}0`
//   }

//   // If input has 2+ decimal numbers, return format with template string and round down
//   return `$${Math.floor(this * 100) / 100}`
// }

// Challenge 7: Tax Rate
Number.prototype.tax = function tax(rate?: number): number {
  if (rate) {
    return Number((this + (this * rate)).toFixed(2))
  }

  return Number((this * 1.25).toFixed(2))
}
