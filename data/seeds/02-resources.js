
exports.seed = function(knex, Promise) {
  return knex('resources').insert([
    {resource_name: 'brainpower', resource_description: 'IQ baby!'},
    {resource_name: 'money', resource_description: '$$$$$$$$'},
    {resource_name: 'persuasion'}
  ]);
};
