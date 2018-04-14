const Rat = function(health){
  this.health = health;
}

Rat.prototype.touch = function (food) {
    food.poison();
};

module.exports = Rat;
