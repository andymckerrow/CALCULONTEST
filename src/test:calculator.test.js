
import assert from 'assert'
import Calculontest from '../src'

describe('calculontest', () => {

  // it('does not expose the add function without the default', () => {
  // assert.fail(Calculator.add(1, 2))
  

  it('add two positive numbers together', () => {
    // ARRANGE below
    const x = 1
    const y = 1
    // ACT 
    const result = calculontest.add(x,y)
    // ASSERT
    assert.equal(result, 2)
  });
