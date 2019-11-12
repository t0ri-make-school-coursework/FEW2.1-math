require('../src/index')

// Challenge 1: Golden Ratio
test('Number.GoldenRatio', () => {
  expect(Number.goldenRatio).toBe(Number(1.61803398875))
  expect(Number.goldenRatio).toBe(1.61803398875)
})

// Challenge 2: Round
test('Number.round()', () => {
  expect(Number(9.99).round()).toBe(Number(10))
  expect(9.99.round()).toBe(10)
})

// Challenge 2: Ceil
test('Number.ceil()', () => {
  expect(Number(9.99).ceil()).toBe(Number(10))
  expect(9.99.ceil()).toBe(10)
})

// Challenge 2: Floor
test('Number.floor()', () => {
  expect(Number(9.99).floor()).toBe(Number(9))
  expect(9.99.floor()).toBe(9)
})

// Challenge 3: Pad
test('Number.pad()', () => {
  expect(Number(9.99).pad(1, 2)).toBe(String('9.99'))
  expect(Number(9.99).pad(2, 3)).toBe(String('09.990'))
  expect(Number(9.99).pad(10, 10)).toBe(String('0000000009.9900000000'))
})

// Challenge 4: Degrees to Radians
test('Number.degToRad()', () => {
  expect(Number(9.99).degToRad()).toBe(Number(0.17435839227423353))
  expect(Number(1).degToRad()).toBe(Number(0.017453292519943295))

  expect(Number(1).degToRad(6)).toBe(Number(0.017453))
  expect(Number(1).degToRad(1)).toBe(Number(0.0))
})

// Challenge 5: Radians to Degrees
test('Number.radToDeg()', () => {
  expect(Number(9.99).radToDeg()).toBe(Number(572.3848373356924))
  expect(Number(1).radToDeg()).toBe(Number(57.29577951308232))

  expect(Number(1).radToDeg(4)).toBe(Number(57.2958))
  expect(Number(1).radToDeg(1)).toBe(Number(57.3))
})

// Challenge 6: Dollar Amount
test('Number.toDollars()', () => {
  expect(9.99.toDollars()).toBe('$9.99')
  expect(Number(0.01).toDollars()).toBe('$0.01')

  expect(Number(0.1).toDollars()).toBe('$0.10')
  expect(Number(0.01).toDollars()).toBe('$0.01')
  expect(Number(1).toDollars()).toBe('$1.00')

  expect(Number(4.129408).toDollars()).toBe('$4.12')
})
