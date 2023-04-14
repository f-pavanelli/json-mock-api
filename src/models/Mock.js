const mongoose = require('../database/index')

const MockSchema = new mongoose.Schema({
    mockName: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    response: {
        type: Object,
        required: true,
        trim: true
    },
    statusCode: {
        type: String,
        required: true,
        trim: true
    },
    requestIdentifier: {
        type: Object,
        required: true,
        trim: true
    },
    api: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Api',
        require: true
    }
},
    {
        timestamps: true
    },
)

MockSchema.index({ mockName: 1, api: 1 }, { unique: true })
MockSchema.index({ requestIdentifier: 1, api: 1 }, { unique: true })

module.exports = mongoose.models.Mock || mongoose.model('Mock', MockSchema)