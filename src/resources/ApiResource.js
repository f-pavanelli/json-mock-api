const AdminJS = require('adminjs')

const Api = require('../models/Api')


module.exports = {
    resource: Api,
    options: {
        parent: {
            icon: 'Api'
        },
        properties: {
            apiName: {
                position: 2
            },
            description: {
                position: 3,
            },
            requestMethod: {
                position: 4,
            },
            identifierKeys: {
                position: 5,
            },
            project: {
                position: 6,
            },
            url: {
                position: 7,
                components: { edit: AdminJS.bundle('../components/CustomUrl'), show: AdminJS.bundle('../components/CustomUrl') }
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