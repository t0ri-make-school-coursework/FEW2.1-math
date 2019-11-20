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
  // expect(Number(9.99).pad(1, 2)).toBe(String('9.99')) #TODO Returns an object?
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
// test('Number.toDollars()', () => {
//   expect(Number(9.99).toDollars()).toBe('$9.99')
//   expect(Number(0.01).toDollars()).toBe('$0.01')

//   expect(Number(0.1).toDollars()).toBe('$0.10')
//   expect(Number(0.01).toDollars()).toBe('$0.01')
//   expect(Number(1).toDollars()).toBe('$1.00')

//   expect(Number(4.129408).toDollars()).toBe('$4.12')
// })

// Challenge 7: Tax Rate
test('Number.tax(rate)', () => {
  expect(Number(1).tax()).toBe(1.25)
  expect(Number(1.25).tax()).toBe(1.56)
  expect(Number(0).tax()).toBe(0)

  expect(Number(1).tax(1)).toBe(2)
})

// Challenge 8: Interest
test('Number.interest(years, rate)', () => {
  expect(Number(1).interest(2, 16)).toBe(1.35)
  expect(Number(70000).interest(10, 0.25)).toBe(71769.82)

  expect(Number(0).interest(10, 0)).toBe(0)
  expect(Number(-1).interest(10, 1)).toBe(-1.1)
})

// Challenge 9: Mortgage
test('Number.mortgage(years, rate)', () => {
  expect(Number(1).mortgage(2, 3)).toBe(3)
  expect(Number(100000).mortgage(10, 0.02)).toBe(2204)
  expect(Number(100).mortgage(10, 0.02)).toBe(2)

  expect(Number(0).mortgage(2, 3)).toBe(0)
  expect(Number(-1).mortgage(2, 3)).toBe(-4)
})
