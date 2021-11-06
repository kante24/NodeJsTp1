const mongoose = require('mongoose');
const Taskschema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, 'PLease add a task']
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    lastUpdate: {
        type: Date,
        default: Date.now
    },
    isAlive: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Task', Taskschema);