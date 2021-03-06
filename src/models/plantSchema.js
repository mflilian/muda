const mongoose = require('mongoose');
const Schema = mongoose.Schema

const plantSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    sciName: {
        type: String,
        required: true
    },
    commonName: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        default: false,
        required: true
    },
    ownerId: [{
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }]
}, { timestamps: true } );

const plantsCollection = mongoose.model('plant', plantSchema);

module.exports = plantsCollection