const assert = require('assert');
const Rat = require('../classes/rat.js')
const Food = require('../classes/food.js')

describe('Rat', function(){

  let rat;
  let food;

  beforeEach(function(){
    rat = new Rat(10)
    food = new Food("hamburger", 10)
  });

  it('should be able to poison food', function(){
    rat.touch(food);
    actual = food.poisoned;
    assert.strictEqual(actual, true);
  })


});
