const assert = require('assert');
const Task = require('../classes/task.js')

describe('Task', function(){
  let task1

  beforeEach(function(){
    task1 = new Task("Find the cat", 3, 4, 10, false)
  })

  it('should have a task name', function(){
    actual = task1.name
    assert.strictEqual(actual, "Find the cat");
  });

  it('should have a difficulty level', function(){
    actual = task1.difficulty
    assert.strictEqual(actual, 3 );
  });

  it('should have urgency level', function(){
    actual = task1.urgency
    assert.strictEqual(actual, 4 );
  });

  it('should have reward', function(){
    actual = task1.reward
    assert.strictEqual(actual, 10 );
  });
});
