const Task = function(name, difficulty, urgency, reward, status){
  this.name = name
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.status = status;
}

module.exports = Task;
