const AdminJS = require('adminjs')

const Project = require('../models/Project')

module.exports = {
    resource: Project,
    options: {
        parent: {
            icon: 'User'
        },
        properties: {
            projectName: {
                position: 2
            },
            description: {
                position: 3,
            },
            createdAt: {
                position: 4,
                isVisible: { list: false, show: false, edit: false }
            },
            updatedAt: {
                position: 5,
                isVisible: { list: false, show: false, edit: false }
            }
        }
    }
}