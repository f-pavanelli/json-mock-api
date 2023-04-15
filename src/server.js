require('dotenv/config')

require('./database')

const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSMongoose = require('@adminjs/mongoose')
const express = require('express')

const ProjectResource = require('./resources/ProjectResource')
const ApiResource = require('./resources/ApiResource')

AdminJS.registerAdapter(AdminJSMongoose)

const app = express()

const adminJS = new AdminJS({
    databases: [],
    rootPath: "/admin",
    resources: [ProjectResource, ApiResource],
    branding: {
        companyName: 'Mock APIs',
        logo: false,
        withMadeWithLove: false,
    }
})

const router = AdminJSExpress.buildRouter(adminJS)

app.use(adminJS.options.rootPath, router)
app.listen(3000, () => console.log('server online'))
