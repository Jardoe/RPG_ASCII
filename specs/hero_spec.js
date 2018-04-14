const assert = require('assert');
const Hero = require('../classes/hero.js')
const Task = require('../classes/task.js')
const Food = require('../classes/food.js')
const Rat = require('../classes/rat.js')

describe('Hero', function(){

  let hero;
  let quests;
  let task1, task2, task3;
  let inventory;
  let completedTasks;
  let food1, food2;
  let rat;

  beforeEach(function(){
    rat = new Rat(10);
    food1 = new Food("hamburger", 10)
    food2 = new Food("banana", 3);
    task1 = new Task("Find the cat", 1, 2, 10, false)
    task2 = new Task("Slay the dragon", 5, 5, 1000, false)
    task3 = new Task("Rule the world", 5, 1, 1, false)
    tasks = [task1];
    completedTasks = [];
    inventory = [];
    hero = new Hero("Steve", 100, "hamburger", 10, tasks, inventory, completedTasks)
  })

  it('should have a name', function(){
    actual = hero.name;
    assert.strictEqual(actual, "Steve")
  });

  it('should have health', function(){
    actual = hero.health;
    assert.strictEqual(actual, 100)
  });

  it('should have a favourite food', function(){
    actual = hero.favFood;
    assert.strictEqual(actual, 'hamburger')
  });

  it('should be able to talk (say their name)', function(){
    actual = hero.talk();
    assert.strictEqual(actual, 'My name is Steve')
  });

  it('should have a wallet', function(){
    actual = hero.wallet;
    assert.strictEqual(actual, 10);
  });

  it('should be able to add to wallet', function(){
    hero.addToWallet(10)
    actual = hero.wallet;
    assert.strictEqual(actual, 20);
  })

  it('should have a collection of tasks', function(){
    actual = hero.tasks;
    assert.deepStrictEqual(actual, [task1]);
  });

  it('should be able to add tasks', function(){
    hero.addTask(task2);
    actual = hero.tasks;
    assert.deepStrictEqual(actual, [task1, task2]);
  })

  it('should be able to pick up food and put in inventory', function(){
    hero.addFood(food1);
    actual = hero.inventory;
    assert.deepStrictEqual(actual, [food1])
  })

  it('should be able to eat food from inventory', function(){
    hero.addFood(food1);
    hero.eatFood(food1);
    actual = hero.inventory;
    assert.deepStrictEqual(actual, []);
  });

  it('food should replenish health', function(){
    hero.addFood(food2);
    hero.eatFood(food2);
    actual = hero.health;
    assert.deepStrictEqual(actual, 103);
  });

  it('favourite food should replenish more health', function(){
    hero.addFood(food1);
    hero.eatFood(food1);
    actual = hero.health;
    assert.strictEqual(actual, 115);
  });

  it('should be able to sort tasks by difficulty', function(){
    hero.addTask(task2);
    hero.sortTaskDifficulty();
    actual = hero.tasks;
    assert.deepStrictEqual(actual, [task1, task2])
  });

  it('should be able to sort tasks by urgency', function(){
    hero.addTask(task2);
    hero.addTask(task3)
    hero.sortTaskUrgency();
    actual = hero.tasks;
    assert.deepStrictEqual(actual, [task3, task1, task2])
  });

  it('should be able to sort tasks by reward', function() {
    hero.addTask(task2);
    hero.addTask(task3)
    hero.sortTaskReward();
    actual = hero.tasks;
    assert.deepStrictEqual(actual, [task3, task1, task2])
  });

  it('should be able to complete tasks', function(){
    hero.completeTask(task1);
    actual = hero.completedTasks;
    assert.deepStrictEqual(actual, [task1] )
  })

  it('should be able to view tasks by completed', function(){
    hero.addTask(task2);
    hero.completeTask(task1);
    actual1 = hero.completedTasks;
    assert.deepStrictEqual(actual1, [task1] )
  });

  it('should be able to put tasks in completed',function(){
    hero.changeStatus(task1);
    hero.putTaskInCompleted(task1);
    actual = hero.completedTasks;
    assert.deepStrictEqual(actual, [task1])
  })

  it('should be able to have multiple tasks and complete one', function(){
    hero.addTask(task2);
    hero.addTask(task3);
    hero.completeTask(task1);
    actual = hero.tasks;
    assert.deepStrictEqual(actual, [task2, task3])
  });

  it('should be able to eat poisonous food', function(){
    rat.touch(food2);
    hero.addFood(food2);
    hero.eatFood(food2);
    actual = hero.inventory;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to lose health points from food', function(){
    rat.touch(food2);
    hero.addFood(food2);
    hero.eatFood(food2);
    actual = hero.health;
    assert.strictEqual(actual, 97);
  });

});
