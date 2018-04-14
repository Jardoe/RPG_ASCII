const Hero = function(name, health, favFood, wallet, tasks, inventory, completedTasks){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.wallet = wallet;
  this.tasks = tasks;
  this.inventory = inventory;
  this.completedTasks = completedTasks;
};

Hero.prototype.talk = function () {
    return `My name is ${this.name}`
};

Hero.prototype.addToWallet = function (money) {
    this.wallet += money;
};

Hero.prototype.addTask = function (task) {
  this.tasks.push(task)
};

Hero.prototype.addFood = function (food) {
  this.inventory.push(food);
};

Hero.prototype.checkPoision = function (food) {
  return food.poisoned;
};

Hero.prototype.eatFood = function (food) {
  if(this.checkPoision(food) === true){
    this.health -= food.replenish;
  } else if (food.name === this.favFood){
      this.health += (food.replenish * 1.5)
  } else {
    this.health += food.replenish;
  }

  let i = this.inventory.indexOf(food);
  if(i != -1){
    this.inventory.splice(i, 1);
  }
};

Hero.prototype.sortTaskDifficulty = function () {
  this.tasks.sort(function(a,b) {
    return a.difficulty - b.difficulty;
  })
};

Hero.prototype.sortTaskUrgency = function () {
  this.tasks.sort(function(a,b){
    return a.urgency - b.urgency;
  })
};

Hero.prototype.sortTaskReward = function () {
  this.tasks.sort(function(a,b){
    return a.reward - b.reward;
  })
};

Hero.prototype.changeStatus = function (changeTask) {
  for(task of tasks){
    if (task === changeTask){
      task.status = true;
    }
  }
};

Hero.prototype.putTaskInCompleted = function () {
  this.completedTasks = this.tasks.filter((task) => task.status === true)
};

Hero.prototype.removeCompletedTask = function (completedTask) {
  let i = this.tasks.indexOf(completedTask);
  if(i != -1){
    this.tasks.splice(i, 1);
  }
};

Hero.prototype.completeTask = function (completedTask) {
  this.changeStatus(completedTask);
  this.putTaskInCompleted();
  this.removeCompletedTask(completedTask);
};


module.exports = Hero;
