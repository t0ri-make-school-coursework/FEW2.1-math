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
