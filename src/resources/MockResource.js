const AdminJS = require('adminjs')
const Mock = require('../models/Mock')

module.exports = {
    resource: Mock,
    options: {
        parent: {
            icon: 'Json'
        },
        properties: {
            mockName: {
                position: 2,
            },
            description: {
                position: 3,
            },
            api: {
                position: 4,
            },
            statusCode: {
                position: 5,
            },
            requestIdentifier: {
                position: 6,
                components: { edit: AdminJS.bundle('../components/IdentifierJsonEditor'), show: AdminJS.bundle('../components/IdentifierJsonEditor') },
            },
            response: {
                position: 7,
                components: { edit: AdminJS.bundle('../components/ResponseJsonEditor'), show: AdminJS.bundle('../components/ResponseJsonEditor') },
            },

            createdAt: {
                position: 8,
                isVisible: { list: false, show: false, edit: false }
            },
            updatedAt: {
                position: 9,
                isVisible: { list: false, show: false, edit: false }
            }
        }
    }
}