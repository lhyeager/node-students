
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {
          Class_Name: 'Art History',
          Class_Level: '1000',
          Description: 'Intro to Art',
        },
        {
          Class_Name: 'Biology',
          Class_Level: '1000',
          Description: 'Intro to Bio',
        },
        {
          Class_Name: 'Geometry',
          Class_Level: '2000',
          Description: 'Intro to Geometry',
        },
        {
          Class_Name: 'History: World Wars',
          Class_Level: '2000',
          Description: 'History of the world through the two world wars.',
        },
        {
          Class_Name: 'Sculpture',
          Class_Level: '3000',
          Description: 'Advanced 3D art techniques',
        },
        {
          Class_Name: 'Psychology',
          Class_Level: '1000',
          Description: 'Intro to psychology',
        },
        {
          Class_Name: 'Economics',
          Class_Level: '2000',
          Description: 'Intro to Economics',
        },
        {
          Class_Name: 'Creative Writing',
          Class_Level: '1000',
          Description: 'Learn how to write compelling stories.',
        },
        {
          Class_Name: 'Golf',
          Class_Level: '1000',
          Description: 'Learn golf basics and rules.',
        },
        {
          Class_Name: 'Russian History',
          Class_Level: '3000',
          Description: 'History of Russia in the 15th century.',
        },
        
      ]);
    });
};
