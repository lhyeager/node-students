
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('enrolled').del()
    .then(function () {
      // Inserts seed entries
      return knex('enrolled').insert([
        {
          student_id: '1',
          class_id: '1'
        },
        {
          student_id: '1',
          class_id: '2'
        },
        {
          student_id: '1',
          class_id: '3'
        },
        {
          student_id: '2',
          class_id: '3'
        },
        {
          student_id: '2',
          class_id: '4'
        },
        {
          student_id: '2',
          class_id: '5'
        },
        {
          student_id: '3',
          class_id: '4'
        },
        {
          student_id: '3',
          class_id: '7'
        },
        {
          student_id: '3',
          class_id: '8'
        },
      ]);
    });
};
