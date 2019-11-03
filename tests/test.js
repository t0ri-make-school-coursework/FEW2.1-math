require('../index')

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
  expect(Number(9.99).pad(2, 3)).toBe(String('09.990'))
  expect(Number(9.99).pad(10, 10)).toBe(String('0000000009.9900000000'))
  expect(Number(9.99).pad(1, 2)).toBe(String('9.99'))
})
