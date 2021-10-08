
exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
    {task_description: 'try to take over the world', task_completed: 1, project_id: 1},
    {task_description: 'call up Pinky and the Brain', project_id:1},
    {task_description: 'read THGTTG', task_notes:'you can get it from the library', task_completed: 1, project_id: 2}
  ]);
};