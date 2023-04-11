const mongoose = require('../database/index');

const ApiSchema = new mongoose.Schema({
    apiName: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    requestMethod: {
        type: String,
        required: true,
    },
    identifierKeys: {
        type: Array,
        required: true,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true,
    },
},
    {
        timestamps: true,
    });

ApiSchema.index({ apiName: 1, project: 1 }, { unique: true });
ApiSchema.index({ url: 1, project: 1 }, { unique: true });


module.exports = mongoose.models.Api || mongoose.model('Api', ApiSchema);