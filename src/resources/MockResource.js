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
            response: {
                position: 4,
                components: { edit: AdminJS.bundle('../components/CustomJsonEditor') }
            },
            statusCode: {
                position: 5,
            },
            requestIdentifier: {
                position: 6,
                type: 'key-value'
            },
            api: {
                position: 7,
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