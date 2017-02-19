const seeder = require('mongoose-seed');
const config = require('.././config');
const Exercises = require('.././app/models/exerciseModel.js');

// Connect to MongoDB via Mongoose
seeder.connect(config.getDbConnectionString(), function() {

    // Load Mongoose models
    seeder.loadModels([
        Exercises
    ]);

    // Clear specified collections
    seeder.clearModels(['Exercises'], function() {

        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data);

    });
});

// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'Exercises',
        'documents': [
            {
                'name': 'Chest Press',
                'muscleGroup': 'chest',
                'description': 'chest press exercise',
                'video': 'www.youtube.com'
            },
            {
              'name': 'Squat',
              'muscleGroup': 'legs',
              'description': 'ass to grass',
              'video': 'www.youtube.com'
            }
        ]
    }
];


// Exercise model schema

// name: {
//     type: String,
//     required: true
// },
// muscleGroup: {
//     type: String,
//     required: true
// },
// description: {
//   type: String,
//   required: true
// },
// video: {
//   type: String
// }
