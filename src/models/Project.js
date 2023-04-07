const mongoose = require('../database/index')

const ProjectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
},
    {
        timestamps: true
    },
)

module.exports = mongoose.models.Project || mongoose.model('Project', ProjectSchema)
