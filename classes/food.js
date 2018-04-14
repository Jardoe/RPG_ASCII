const Food = function(name, replenish){
  this.name = name;
  this.replenish = replenish;
  this.poisoned = false;

}

Food.prototype.poison = function () {
  return this.poisoned = true;  
};

module.exports = Food;
