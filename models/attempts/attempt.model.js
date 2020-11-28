const mongoose = require('mongoose');
const attemptSchema = require('./attempt.schema');

const attemptModel = mongoose.model('AttemptModel', attemptSchema);

module.exports = attemptModel;
