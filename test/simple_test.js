import assert from 'assert'
import Calculontest from '../src'

describe('Calculontest', () => {

  it('add two positive numbers together', () => {
    // Arrange
    const x = 1
    const y = 1

    // Act
    const result = Calculontest.add(x, y)

    // Assert
    assert.equal(result, 2)
  })
  it('add three-digit number and four-digit number together', () => {
    const x = 347
    const y = 6493
    const result = Calculontest.add(x,y)
    assert.equal(result, 6840)
  })
  it('add one positive and one negative number together', () => {
    const x = 2
    const y = -4
    const result = Calculontest.add(x, y)
    assert.equal(result, -2)
  })

  it('add one positive decimal and one negative decimal together', () => {
    const x = .2
    const y = -.076
    const result = Calculontest.add(x, y)
    assert.equal(result, .0152)
  })

  it('subtract one positive number from one positive number', () => {
    const x = 10
    const y = 7
    const result = Calculontest.subtract(x, y)
    assert.equal(result, 3)
  })

  it('subtract one positive number from one negative number', () => {
    const x = -27
    const y = 10
    const result = Calculontest.subtract(x, y)
    assert.equal(result, -37)
  })

  it('subtract one positive percentage from one negative percentage', () => {
    const x = .27
    const y = .10
    const result = Calculontest.subtract(x, y)
    assert.equal(result, .17)
  })


// it("multiply one positive number by one percentage", () => {
// const x = 50
// const y = percentage(30, per)
// const result = Calculontest.multiply(x, y)
// assert.equal(result, 15)
// })

  it('multiply two positive numbers together', () => {
    const x = 3
    const y = 7
    const result = Calculontest.multiply(x, y)
    assert.equal(result, 21)
  })

  it('multiply one positive and one negative number together', () => {
    const x = 4
    const y = -6
    const result = Calculontest.multiply(x, y)
    assert.equal(result, -24)
  })

  it('multiply two negative numbers together', () => {
    const x = -4
    const y = -6
    const result = Calculontest.multiply(x, y)
    assert.equal(result, 24)
  })

  it('divide one positive by one negative number', () => {
    const x = 6
    const y = -3
    const result = Calculontest.divide(x, y)
    assert.equal(result, -2)
  })

  it('divide two positive numbers together', () => {
    const x = 4
    const y = 8
    const result = Calculontest.divide(x, y)
    assert.equal(result, .5)
  })
  // Testing for over exposure from the src/index.js file.
  // The js file doens't export the add function by default, and we must make it export in the export default
  // Use this test when you have developers that over expose things, "Protect the privates"
  // it(`does not expose the add function without the default`, () => {
  //   assert.fail(add(1, 2))
  // })
});



