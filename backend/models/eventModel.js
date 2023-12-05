const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    sport: {
        type: String,
        required: true
    },
    spotsTotal: {
        type: Number,
        required: true
    },
    spotsOpen: {
        type: Number,
        required: false
    },
    lookingFor: { // Maybe like looking for only girls or only competitive?
        type: String,
        required: false
    },
    usersAssociated: {
        type: Array,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    eventDate: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Event', eventSchema)