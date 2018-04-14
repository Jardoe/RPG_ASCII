const assert = require('assert');
const Food = require('../classes/food.js')

describe('Food', function(){

  let food1, food2, food3;

  beforeEach(function(){
    food1 = new Food("hamburger", 10);
    food2 = new Food("cheese", 5);
    food3 = new Food("apple", 5)

  })

    it('should have a name', function(){
      actual = food1.name
      assert.strictEqual(actual, 'hamburger')
    });

    it('should have a replenishment value', function(){
      actual = food1.replenish
      assert.strictEqual(actual, 10);
    });

    it('should be able to be poisoned', function(){
      actual = food1.poison()
      assert.strictEqual(actual, true)
    });

});
