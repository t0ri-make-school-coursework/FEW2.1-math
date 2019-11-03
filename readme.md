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