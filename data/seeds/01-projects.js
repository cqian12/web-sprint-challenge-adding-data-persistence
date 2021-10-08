
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {project_name: 'World Domination', project_description: 'should be fairly obvious', project_completed:0},
    {project_name: 'figure out the meaning of life', project_completed:1},
  ]);
};