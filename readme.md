![npm](https://img.shields.io/npm/v/@t0ri/math)
![Travis (.com)](https://img.shields.io/travis/com/t0ri/FEW2.1-math)
![Coveralls github](https://img.shields.io/coveralls/github/t0ri/FEW2.1-math)
![GitHub repo size](https://img.shields.io/github/repo-size/t0ri/FEW2.1-math)


# Math Library 🧮
A math library containing properties and methods extended onto  `Number.prototype`.

### Golden Ratio
`Number.goldenRatio` is equal to `1.61803398875`.

```
let num = Number.goldenRatio
num -> 1.61803398875
```

### Round
The `.round()` method rounds the Number it is called on to the nearest whole number.

```
let num = 9.99
num.round() -> 10
```

### Ceil
The `.ceil()` method rounds the Number it is called on to the higher whole number.

```
let num = 9.99
num.ceil() -> 10
```

### Floor
The `.floor()` method rounds the Number it is called on to the lower whole number.

```
let num = 9.99
num.floor() -> 9
```

### Pad
The `.pad(x, y)` method pads the Number it is called on with 0s in order to reach a total of digits (x, y) on each side of the decimal point.
Returns a String.

```
let num = 9.99
34.801.pad(4,3) -> 0009.990
```

### Degrees to Radians
The `.degToRad()` method returns a number's radian value.
Accepts an optional argument to return a fixed amount of decimal numbers.

```
let num = 1
num.degToRad() -> 0.017453292519943295
num.degToRad(6) -> 0.017453
```

### Radians to Degrees
The `.radToDeg()` method returns a number's degree value.
Accepts an optional argument to return a fixed amount of decimal numbers.

```
let num = 1
num.radToDeg() ->
num.radToDeg(4) -> 57.2958
```

### Dollar Amount
The `.toDollars()` method returns a numeric value formatted in USD.

```
let num = 1
num.toDollars() -> '$1.00'
```

### Tax
The `.tax(rate)` method returns an amount with tax applied.
Accepts optional argument (number) to calculate tax on amount.
Without argument, tax rate defaults to `.25`.

```
let num = 1
num.tax(.25) -> 1.25
```

### Interest
The `.interest(years, rate)` method calculates interest over time.

```
let num = 1
num.interest(2, 16) -> 1.35
```
