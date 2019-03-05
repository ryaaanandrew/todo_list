function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      task.complete = true;
    }
  };
  return task
}


// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`

// Print the state of a task to the console in a nice readable way

// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "take all the poop out of the litter box");
const task2 = newTask("Do laundry", "😨");
const tasks = [task1, task2];

task1.logState()
task1.markCompleted()
task1.logState()

